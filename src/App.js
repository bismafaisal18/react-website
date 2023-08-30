import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import About from './modules/About';
import AllProducts from './modules/AllProducts';
import BatingPads from './modules/BatingPads';
import Bats from './modules/Bats';
import Contact from './modules/Contact';
import Gloves from './modules/Gloves';
import Home from './modules/Home';


function App() {
  return (

    
    <BrowserRouter>
    

      <Navbar/>
      <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/about-us" element={<About/>} />
    <Route exact path="/contact-us" element={<Contact/>} />
    <Route exact path="/bats-product" element={<Bats/>} />
    <Route exact path="/pads-all" element={<BatingPads/>} />
    <Route exact path="/gloves-alll" element={<Gloves/>} />
    <Route exact path="/products-all" element={<AllProducts/>} />

    </Routes>

    <div className="whtsapp">
  <a href="https://wa.me/923268810307">
    <img src="../../images/whtsapplogo.png" width="50" alt="" style={{ position: "fixed", bottom: "40px", right: "20px" }} />
  </a>
</div>
    </BrowserRouter>

    
  );
}

export default App;
