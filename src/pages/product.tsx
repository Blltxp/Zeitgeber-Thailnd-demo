import React, { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/footer";
import { ShoppingCartIcon, EyeIcon } from "@heroicons/react/24/outline";

import collection1 from "../assets/image/about us1.jpg";
import collection2 from "../assets/image/about us2.png";
import collection3 from "../assets/image/home.png";

// ✅ รูปแจกัน
import Vase1 from "../assets/image/Vase/vaseCategories.png";
import Vase2 from "../assets/image/Vase/ZE flower vase.png";
import Vase3 from "../assets/image/Vase/ZE. flower vase.png";

// ✅ รูปมู่ลี่
import A25_02 from "../assets/image/Blinds/A25-02 Walnut.jpg";
import A25_05 from "../assets/image/Blinds/A25-05 Golden Oak.jpg";
import A25_39 from "../assets/image/Blinds/A25-39 Black.jpg";

// ✅ รูปผ้าม่าน Blackout
import FB_018 from "../assets/image/Curtain/ผ้าม่าน Blackout/FB-018.png";
import FB_019 from "../assets/image/Curtain/ผ้าม่าน Blackout/FB-019.png";

// ✅ รูปผ้าม่านห่วงตาไก่
import ECT05_01 from "../assets/image/Curtain/ผ้าม่านห่วงตาไก่ สำเร็จรูป 1/ECT05-01.png";
import ECT05_02 from "../assets/image/Curtain/ผ้าม่านห่วงตาไก่ สำเร็จรูป 1/ECT05-02.png";
import ECT05_03 from "../assets/image/Curtain/ผ้าม่านห่วงตาไก่ สำเร็จรูป 1/ECT05-03.png";
import ECT05_04 from "../assets/image/Curtain/ผ้าม่านห่วงตาไก่ สำเร็จรูป 1/ECT05-04.png";

const products = [
  {
    id: 1,
    title: "Tear Drop Vase",
    category: "แจกัน",
    price: 1250,
    image: Vase1,
  },
  {
    id: 2,
    title: "ZE Flower Vase",
    category: "แจกัน",
    price: 890,
    image: Vase2,
  },
  {
    id: 3,
    title: "ZE. Flower Vase",
    category: "แจกัน",
    price: 950,
    originalPrice: 1200,
    image: Vase3,
  },
  {
    id: 4,
    title: "มู่ลี่ไม้ มู่ลี่ Foamwood A25-02 Walnut",
    category: "มู่ลี่",
    price: 2500,
    image: A25_02,
  },
  {
    id: 5,
    title: "มู่ลี่ไม้ มู่ลี่ Foamwood A25-05 Golden Oak",
    category: "มู่ลี่",
    price: 2500,
    image: A25_05,
  },
  {
    id: 6,
    title: "มู่ลี่ไม้ มู่ลี่ Foamwood A25-39 Black",
    category: "มู่ลี่",
    price: 2500,
    image: A25_39,
  },
  {
    id: 7,
    title: "ผ้า Blackout ลาย Embossing FB-018",
    category: "ผ้าม่าน",
    price: 1800,
    image: FB_018,
  },
  {
    id: 8,
    title: "ผ้า Blackout ลาย Embossing FB-019",
    category: "ผ้าม่าน",
    price: 1800,
    originalPrice: 2200,
    image: FB_019,
  },
  {
    id: 9,
    title: "ผ้าม่านห่วงตาไก่สำเร็จรูป ECT05-01",
    category: "ผ้าม่าน",
    price: 650,
    image: ECT05_01,
  },
  {
    id: 10,
    title: "ผ้าม่านห่วงตาไก่สำเร็จรูป ECT05-02",
    category: "ผ้าม่าน",
    price: 650,
    image: ECT05_02,
  },
  {
    id: 11,
    title: "ผ้าม่านห่วงตาไก่สำเร็จรูป ECT05-03",
    category: "ผ้าม่าน",
    price: 650,
    image: ECT05_03,
  },
  {
    id: 12,
    title: "ผ้าม่านห่วงตาไก่สำเร็จรูป ECT05-04",
    category: "ผ้าม่าน",
    price: 650,
    image: ECT05_04,
  },
];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ทั้งหมด");
  const [sortBy, setSortBy] = useState<string>("default");
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const categories = ["ทั้งหมด", "แจกัน", "มู่ลี่", "ผ้าม่าน"];

  const filteredProducts =
    selectedCategory === "ทั้งหมด"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <main className="bg-gray-50 text-gray-800 font-Thai relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <ScrollToTopButton />

      {/* Overlay เมื่อ Drawer เปิด */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}

      {/* Drawer (ตัวกรองสินค้า) */}
      <div
        className={`fixed top-1/2 left-0 -translate-y-1/2 h-[80vh] w-72 bg-white shadow-2xl border-r rounded-r-lg transform transition-transform duration-300 ease-in-out z-50 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-bold">ตัวกรองสินค้า</h3>
          <button
            onClick={() => setShowSidebar(false)}
            className="text-gray-500 text-2xl leading-none hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <div className="p-6 overflow-y-auto h-[calc(80vh-4rem)]">
          <div className="mb-6">
            <h4 className="text-base font-semibold mb-3">หมวดหมู่สินค้า</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowSidebar(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded transition cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-red-500 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-4">
            <h4 className="text-base font-semibold mb-3">กรองตามราคา</h4>
            <input type="range" min="0" max="5000" className="w-full mb-3" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>฿0</span>
              <span>฿5,000</span>
            </div>
            <button className="w-full cursor-pointer mt-4 bg-white text-black py-2 rounded border border-black hover:bg-red-600 hover:text-white transition">
              กรอง
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mt-20 mb-50 mx-auto px-6 py-12">
        {/* 🆕 New Collection Container */}
        <div className="mb-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              คอลเลคชั่นใหม่จากเรา
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptas ut dolorum consequuntur, adipisci repellat! Eveniet
              commodi voluptatem voluptate, eum minima, in suscipit explicabo
              voluptatibus harum, quibusdam ex repellat eaque!
            </p>
          </div>

          {/* Grid 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group">
              <div className="aspect-3/4 overflow-hidden mb-4 cursor-pointer">
                <img
                  src={collection1}
                  alt="Collection 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2 uppercase tracking-wider">
                Collection set 1
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur
                adipisicing elit.
              </p>
              <button className="text-sm font-semibold uppercase tracking-wider hover:text-red-500 transition underline">
                ดูเลย
              </button>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="aspect-3/4 overflow-hidden mb-4 cursor-pointer">
                <img
                  src={collection2}
                  alt="Collection 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2 uppercase tracking-wider">
                Collection set 2
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur
                adipisicing elit.
              </p>
              <button className="text-sm font-semibold uppercase tracking-wider hover:text-red-500 transition underline cursor-pointer">
                ดูเลย
              </button>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="aspect-3/4 overflow-hidden mb-4 cursor-pointer">
                <img
                  src={collection3}
                  alt="Collection 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-2 uppercase tracking-wider">
                Collection set 3
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur
                adipisicing elit.
              </p>
              <button className="text-sm font-semibold uppercase tracking-wider hover:text-red-500 transition underline cursor-pointer">
                ดูเลย
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-8">
          <div>
            <p className="text-6xl">สินค้าของเรา</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 p-4 ">
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">
                แสดงผลลัพธ์ {sortedProducts.length} รายการ
              </p>

              {/* ปุ่มเปิด Drawer */}
              <button
                onClick={() => setShowSidebar(true)}
                className="flex cursor-pointer items-center bg-white text-black px-4 py-2 border border-black  shadow hover:bg-red-500 hover:text-white transition"
              >
                ตัวกรองสินค้า
              </button>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border cursor-pointer border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option className="cursor-pointer" value="default">
                จัดเรียงปกติ
              </option>
              <option className="cursor-pointer" value="price-low">
                ราคา: ต่ำไปสูง
              </option>
              <option className="cursor-pointer" value="price-high">
                ราคา: สูงไปต่ำ
              </option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer text-center ">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-square  overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Sale Badge */}
                  {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      ลดราคา!
                    </span>
                  )}

                  {/* Hover Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <button className="bg-white text-gray-800 p-2.5 cursor-pointer rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <ShoppingCartIcon className="w-5 h-5" />
                    </button>
                    <button className="bg-white text-gray-800 p-2.5 cursor-pointer rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
                      <EyeIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide text-center">
                    {product.category}
                  </p>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 min-h-12">
                    {product.title}
                  </h3>
                  <div className="items-center gap-2">
                    {product.originalPrice ? (
                      <>
                        <span className="text-gray-400 line-through text-sm">
                          ฿{product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-amber-600 font-bold text-lg">
                          ฿{product.price.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-900 font-bold text-lg">
                        ฿{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProductsPage;
