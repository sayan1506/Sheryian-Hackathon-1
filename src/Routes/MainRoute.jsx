import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Productdetails from "../Pages/Productdetails";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import About from "../Pages/About";


const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={< Product/>} />
      <Route path="/Productdetails" element={< Productdetails/>} />
      <Route path="/Cart" element={< Cart/>} />
      <Route path="/Login" element={< Login/>} />
      <Route path="/About" element={< About/>} />
    </Routes>
  );
};

export default MainRoute;
