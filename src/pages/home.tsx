import React from "react";
import Footer from "../components/footer";
import ImageComparisonSlider from "../components/ImageComparison_Silder";
import NewCollectionImage from "../assets/image/new collections.jpg";
import PreviewsImage from "../assets/image/banner1.jpg";
import blindsCategories from "../assets/image/Blinds/blindsCategories.jpg";
import interiorFlimCategories from "../assets/image/Interior film/interiorCategories.png";
import curtainCategories from "../assets/image/Curtain/curtainsCategories.jpg";
import vaseCategories from "../assets/image/Vase/vaseCategories.jpg";
import DiscountImage from "../assets/image/price-tag.png";
import ShippingImage from "../assets/image/shipping-car.png";
import PaymentImage from "../assets/image/payment.png";
import ServiceInstallImage from "../assets/image/installations-service.png";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <ImageComparisonSlider />

      {/* Floating Scroll-to-Top Button */}
      <ScrollToTopButton />

      {/*Previews*/}
      <section id="preview-banner" className="py-20 bg-white">
        <img
          src={PreviewsImage}
          alt="New Living Room Collection"
          className="w-full h-auto"
        />
      </section>

      {/*NewCollection*/}

      <section id="new-collection" className="py-40 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <img
              src={NewCollectionImage}
              alt="New Living Room Collection"
              className="w-full h-auto shadow-md rounded-ss-4xl"
            />
          </div>

          <div className="text-black">
            <span className="uppercase text-sm tracking-widest text-red-500 font-semibold mb-2 block font-Thai">
              คอลเลคชั่นใหม่
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-snug font-Thai">
              ชุดเซ็ตสมบูรณ์แบบสำหรับตกแต่งห้องของคุณ
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed font-Quicksand">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quam tenetur adipisci expedita corrupti, perferendis repudiandae
              quidem ut nesciunt, delectus excepturi atque, ea beatae earum cum
              aliquid vitae laudantium voluptatibus!
            </p>
            <a
              href="#new-collection"
              className="inline-block bg-red-500 text-black font-Thai px-5 py-3  hover:bg-black hover:text-white transition"
            >
              เลือกซื้อคอลเลคชั่นนี้
            </a>
          </div>
        </div>
      </section>

      <section id="product-categories" className="py-20  bg-gray-50 flex-wrap">
        <h1 className="text-7xl font-Thai text-center mb-20">ประเภทสินค้า</h1>
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {/* Blinds */}
            <div className="relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={blindsCategories}
                  alt="Blinds"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent opacity-100 group-hover:from-black/85 group-hover:via-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-Thai flex items-center gap-2">
                    มู่ลี่
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Interior Film */}
            <div className="relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={interiorFlimCategories}
                  alt="Interior Film"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-100 group-hover:from-black/85 group-hover:via-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-Thai flex items-center gap-2">
                    ฟิล์มตกแต่งภายใน และเฟอร์นิเจอร์
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Curtain */}
            <div className="relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={curtainCategories}
                  alt="Curtains"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-100 group-hover:from-black/85 group-hover:via-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-Thai flex items-center gap-2">
                    ผ้าม่าน
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Vase */}
            <div className="relative group overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2">
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={vaseCategories}
                  alt="vaseCategories"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-100 group-hover:from-black/85 group-hover:via-black/30 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-white text-2xl font-Thai   flex items-center gap-2">
                    แจกัน
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 font-Thai text-center">
          <div className="flex flex-col items-center">
            <img
              src={DiscountImage}
              alt="Discount"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 ">ส่วนลดพิเศษ</h3>
            <p className="text-gray-600 text-sm ">
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={ShippingImage}
              alt="Shipping"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 ">ส่งฟรี</h3>
            <p className="text-gray-600 text-sm ">
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img src={PaymentImage} alt="Payments" className="w-12 h-12 mb-4" />
            <h3 className="font-semibold text-lg mb-2 ">
              ชำระเงินได้ทุกช่องทาง
            </h3>
            <p className="text-gray-600 text-sm ">
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src={ServiceInstallImage}
              alt="Installations Service"
              className="w-12 h-12 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 ">ทีมช่างติดตั้งฟรี</h3>
            <p className="text-gray-600 text-sm ">
              Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
              orci viverra, cursus justo.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
