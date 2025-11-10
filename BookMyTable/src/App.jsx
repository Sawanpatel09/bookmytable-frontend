import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// Import pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";
import Booking from "./pages/Booking/Booking";

function App() {
  return (
    <Router>
      {/* Add Navbar/Header here if you have one */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Booking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
