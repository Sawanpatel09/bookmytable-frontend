import React from "react";
import Footer from "./components/Footer/Footer"; // ✅ import footer component
import "./App.css";
import Navbar from "./components/Navbar/Navbar"; // ✅ import navbar component

function App() {
  return (
    <div className="App">
     

      <Navbar />
      <Footer />

      
    </div>
  );
}

export default App;
