import React from "react";
import Logo from "../assets/image/logo-svg.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="InteriorFilm Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold text-white font-Garamond">
              Zeitgeber Thailand
            </span>
          </div>

          <p className="text-sm mb-2 font-thai">
            2439 ซอยพัฒนาการ 47 ถนนพัฒนาการ แขวงพัฒนาการ เขตสวนหลวง
            กรุงเทพมหานคร 10250
          </p>
          <p className="text-sm mb-2 font-Thai">+66 085 578 1263</p>
          <p className="text-sm mb-4 font-Thai">zaina3406941@gmail.com</p>
          <a
            href="#"
            className="text-red-500 hover:underline text-sm font-Thai"
          >
            เยี่ยมชมร้านค้าของเรา
          </a>
        </div>

        <div className="mt-14 font-Thai">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-red-500">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-red-500 font-">
                สินค้า
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-500 ">
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-500 ">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-14 font-Thai">
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#blinds" className="hover:text-red-500 font-Quic">
                มู่ลี่{" "}
              </a>
            </li>
            <li>
              <a href="#Interior Flim" className="hover:text-red-500 ">
                ฟิล์มตกแต่งภายใน และเฟอร์นิเจอร์
              </a>
            </li>
            <li>
              <a href="#Curtains" className="hover:text-red-500 ">
                ผ้าม่าน
              </a>
            </li>
            <li>
              <a href="#Vase" className="hover:text-red-500 f">
                แจกัน
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 font-Thai">
            ผู้จำหน่ายม่านบังตาและวัสดุตกแต่งบ้านครบวงจร
          </h4>
          <p className="text-sm ">
            • ม่านม้วน มู่ลี่ไม้ มู่ลี่โฟม และม่านปรับแสง
          </p>
          <p className="text-sm ">• กระเบื้องยางคุณภาพสูง</p>
          <p className="text-sm mb-4 ">• อินทีเรียร์ฟิล์ม และซิปไบลน์</p>
          <p className="text-sm">
            และวัสดุตกแต่งอีกหลากหลายสำหรับบ้านสวยของคุณ
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-amber-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-xs text-gray-400 font-Playfair">
        <p>Copyright © 2023 Tanatat Paungpaen</p>
        <p>Powered by Tanatat Paungpaen</p>
      </div>
    </footer>
  );
};

export default Footer;
