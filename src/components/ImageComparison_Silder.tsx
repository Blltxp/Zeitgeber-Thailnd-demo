import React, { useState, useRef, useEffect } from "react";
import BgSection1 from "../assets/image/home.png";
import BgPrevious from "../assets/image/home_previous.png";

const ImageComparisonSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(20);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const MIN_POSITION = 0;
  const MAX_POSITION = 100;

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;

    const x = clientX - rect.left;
    const percent = Math.max(
      MIN_POSITION,
      Math.min((x / rect.width) * 100, MAX_POSITION)
    );
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const sliderX = (sliderPosition / 100) * containerRect.width;

    const chars = containerRef.current.querySelectorAll(".char-transition");
    chars.forEach((char) => {
      const rect = (char as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2 - containerRect.left;
      (char as HTMLElement).style.color =
        centerX <= sliderX ? "#000000FF" : "white";
    });
  }, [sliderPosition]);

  const renderTextWithTransition = (text: string) => {
    return (
      <>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="char-transition"
            style={{ transition: "color 0.3s ease" }}
          >
            {char}
          </span>
        ))}
      </>
    );
  };

  const [buttonPassed, setButtonPassed] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !buttonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const sliderX = (sliderPosition / 100) * containerRect.width;

    const buttonRightEdge = buttonRect.right - containerRect.left;

    setButtonPassed(sliderX > buttonRightEdge);
  }, [sliderPosition]);

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={containerRef} className="relative w-full h-full select-none">
        <img
          src={BgSection1}
          alt="After"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={BgPrevious}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* เส้นแนวตั้ง */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 pointer-events-none"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
        />

        {/* ตัว slider */}
        <div
          className="absolute z-10 w-12 h-12 bg-white rounded-full cursor-ew-resize hover:opacity-100 transition-opacity flex items-center justify-center shadow-lg"
          style={{
            left: `calc(${sliderPosition}% - 24px)`,
            top: "calc(100% - 60px)",
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="flex gap-1">
            <div className="w-0.5 h-6 bg-black"></div>
            <div className="w-0.5 h-6 bg-black"></div>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-5 pointer-events-none">
          <h1 className="text-4xl font-bold md:text-7xl font-Playfair mb-6 drop-shadow-lg">
            {renderTextWithTransition("Zeitgeber Thailand")}
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 font-Thai px-4 drop-shadow-md">
            {renderTextWithTransition(
              "วัสดุตกแต่งครบวงจร สำหรับบ้านสวยของคุณ"
            )}
          </p>
          <a
            ref={buttonRef}
            href="#product-categories"
            className={`inline-block font-Thai px-10 py-1 border transition pointer-events-auto duration-100 ${
              buttonPassed
                ? "bg-black text-white border-white hover:bg-white hover:text-black hover:border-black"
                : "bg-white text-black border-black hover:bg-black hover:text-white hover:border-white"
            }`}
          >
            ดูสินค้า
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageComparisonSlider;
