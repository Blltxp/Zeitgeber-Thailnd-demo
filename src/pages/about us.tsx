import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import Logo from "../assets/image/logo-svg.svg";
import aboutUsImage1 from "../assets/image/about us2.png";
import aboutUsImage2 from "../assets/image/about us3.jpg";
import aboutUsImage3 from "../assets/image/about us1.jpg";
import aboutUsImage4 from "../assets/image/about us4.jpg";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";

const AboutUs: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const isRunningRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const bgEl = bgRef.current;

    console.log("[AboutUs] mounted", { heroEl: !!heroEl, bgEl: !!bgEl });

    if (!heroEl || !bgEl) return;

    // Respect prefers-reduced-motion
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    console.log("[AboutUs] prefers-reduced-motion:", reduceMotion);
    if (reduceMotion) return;

    // Desktop-only (>=768px)
    const mq = window.matchMedia("(min-width: 768px)");
    console.log("[AboutUs] desktop mq matches:", mq.matches);
    if (!mq.matches) return;

    // Helper: compute translate based on element position
    const computeTranslate = () => {
      const rect = heroEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
      );
      const maxTranslate = 40; // px, ปรับตามต้องการ
      // center-based mapping: เมื่อ element อยู่กึ่งกลาง จะเป็น 0
      const translateY = (visible - 0.5) * -1 * maxTranslate;
      return Number.isFinite(translateY) ? translateY : 0;
    };

    // RAF-driven update
    const onRafUpdate = () => {
      rafRef.current = null;
      const t = computeTranslate();
      bgEl.style.transform = `translate3d(0, ${t}px, 0)`;
    };

    const scheduleUpdate = () => {
      if (rafRef.current == null)
        rafRef.current = requestAnimationFrame(onRafUpdate);
    };

    // Use IntersectionObserver to start/stop parallax when hero enters/leaves viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isRunningRef.current) {
              isRunningRef.current = true;
              // initial update
              scheduleUpdate();
              // listen to scroll/resize
              window.addEventListener("scroll", scheduleUpdate, {
                passive: true,
              });
              window.addEventListener("resize", scheduleUpdate, {
                passive: true,
              });
              console.log("[AboutUs] parallax started");
            }
          } else {
            if (isRunningRef.current) {
              isRunningRef.current = false;
              window.removeEventListener("scroll", scheduleUpdate);
              window.removeEventListener("resize", scheduleUpdate);
              if (rafRef.current) cancelAnimationFrame(rafRef.current);
              rafRef.current = null;
              // optional: reset transform slightly (keeps last state but you can set to 0)
              // bgEl.style.transform = "translate3d(0,0,0)";
              console.log("[AboutUs] parallax stopped");
            }
          }
        });
      },
      { threshold: [0, 0.1, 0.5, 1] }
    );

    io.observe(heroEl);

    // initial check in case hero already visible
    // schedule a single update
    scheduleUpdate();

    // cleanup
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      console.log("[AboutUs] cleanup parallax");
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-700">
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Image + Founder Section */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 py-16 px-6 max-w-6xl mx-auto mb-20">
        <figure className="w-full">
          <img
            src={aboutUsImage1}
            alt="ทีมงาน Zeitgeber ถ่ายในสตูดิโอ"
            loading="lazy"
            className="w-full h-auto shadow-md rounded-md object-cover"
          />
          <figcaption className="sr-only">ทีมงานและกระบวนการออกแบบ</figcaption>
        </figure>

        <div>
          <figure className="mb-6">
            <img
              src={aboutUsImage2}
              alt="ตัวอย่างงานติดตั้งภายในบ้าน"
              loading="lazy"
              className="w-full h-auto shadow-md rounded-md object-cover mb-6"
            />
          </figure>

          <blockquote className="text-gray-600 mb-4 font-Quicksand italic">
            “The essence of interior design will always be about people and how
            they live. It is about the realities of what makes for an
            attractive, civilized, meaningful environment—not about fashion or
            what's in or what's out.”
          </blockquote>

          <h4 className="text-xl font-semibold font-Garamond mb-1">
            Albert Livingston Hadley Jr.
          </h4>
          <p className="text-sm text-gray-500 font-Quicksand">
            Interior Designer Said
          </p>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="โลโก้ Zeitgeber Thailand" className="h-12" />
        </div>
        <h1 className="text-3xl md:text-4xl font-Garamond font-bold mb-2">
          Zeitgeber Thailand
        </h1>
        <p className="text-gray-600 text-lg font-Thai">
          ที่นี่ เรานำเข้า ส่งออก ผ้าม่านทุกชนิด และอุปกรณ์ตกแต่งบ้านครบครัน
        </p>
      </section>

      {/* Hero with Parallax background + preserved white card at bottom */}
      <section className="relative h-[420px] md:h-[480px]" ref={heroRef}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={bgRef}
            src={aboutUsImage3}
            alt="บรรยากาศโชว์รูมและผลิตภัณฑ์"
            loading="lazy"
            className="w-full h-full object-cover will-change-transform transition-transform duration-300"
            style={{ transform: "translate3d(0,0,0)" }}
            onError={(e) =>
              console.error("[AboutUs] bg image failed to load", e)
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* White box overlay (preserve bottom negative as requested) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] z-30 w-full max-w-6xl px-6">
          <div className="bg-white/95 backdrop-blur-sm shadow-xl py-10 px-6 md:px-8 rounded-lg ring-1 ring-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-BebasNeue">
                  2017
                </h2>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2 font-DmSerif">
                  Founded
                </p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-BebasNeue">
                  100+
                </h2>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2 font-DmSerif">
                  Employee
                </p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-BebasNeue">
                  1000+
                </h2>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2 font-DmSerif">
                  Products
                </p>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-red-500 font-BebasNeue">
                  3
                </h2>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2 font-DmSerif">
                  Stores
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Column Text Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 font-Quicksand">
        <p className="text-gray-600 leading-relaxed">
          Fugiat elit irure ullamco est, enim ea labore ipsum aliqua. Qui
          deserunt nisi nostrud mollit voluptate enim. A aliquip elit aliqua
          voluptate. Laboris occaecat aute excepteur ut...
        </p>
        <p className="text-gray-600 leading-relaxed">
          Aliquip incididunt tempor duis magna aliqua. Aliquip incididunt tempor
          duis magna aliqua. Aliquip incididunt tempor duis magna aliqua.
          Aliquip incididunt tempor duis magna aliqua...
        </p>
      </section>

      {/* Product highlight section aligned with Home visual tone */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-1 font-Garamond">
            The Best Quality Product Our Us
          </h2>
          <h3 className="text-lg mb-6 font-Thai">สินค้าที่ดีที่สุดของเรา</h3>
          <div className="flex gap-12 flex-wrap">
            <ul className="list-disc list-inside text-gray-700 font-Thai">
              <li>Blinds</li>
              <li>Interior Film</li>
              <li>Furniture Film</li>
              <li>Curtains</li>
              <li>Vase</li>
            </ul>
            <ul className="list-disc list-inside text-gray-700 font-Thai">
              <li>มู่ลี่</li>
              <li>ฟิล์มตกแต่งภายใน</li>
              <li>ฟิล์มตกแต่งเฟอร์นิเจอร์</li>
              <li>ผ้าม่าน</li>
              <li>แจกัน</li>
            </ul>
          </div>
        </div>

        <figure>
          <img
            src={aboutUsImage4}
            alt="ตัวอย่างสินค้าชุดตกแต่งห้อง"
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </figure>
      </section>

      <Footer />
    </main>
  );
};

export default AboutUs;
