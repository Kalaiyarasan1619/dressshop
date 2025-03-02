import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Bootstrap class 'min-vh-100' to push footer down */}
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <Routes>
            <Route path="#/" element={<Shop />} />
            <Route path="#/men" element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path="#/women" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="#/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path="#/product" element={<Product />} />
            <Route path="#/cart" element={<Cart />} />
            <Route path="#/login" element={<LoginSignup />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
