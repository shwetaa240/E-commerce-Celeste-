import React from "react";
import { Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Placeorders from "./pages/Placeorders";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]"> 
      <ToastContainer/>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path='/placeorders' element={<Placeorders />} />
        <Route path='/orders' element={<Orders />} />
      </Routes> 
      <Footer/>
    </div> 
    </div>
  );
};

export default App;
