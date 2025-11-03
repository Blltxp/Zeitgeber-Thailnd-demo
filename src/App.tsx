import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs.tsx";
import ProductsPage from "./pages/product.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {" "}
        {/* เพื่อเว้นพื้นที่ให้ Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/ProductsPage" element={<ProductsPage />} />

        </Routes>
      </div>
      <footer/>
    </Router>
  );
}

export default App;
