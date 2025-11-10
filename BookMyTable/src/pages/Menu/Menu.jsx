import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>Explore our royal collection of dishes and cuisines.</p>
      <div className="menu-grid">
        <div className="menu-item">🍕 Pizza Royale</div>
        <div className="menu-item">🍝 Truffle Pasta</div>
        <div className="menu-item">🥗 Caesar Salad</div>
        <div className="menu-item">🍰 Choco Lava Cake</div>
      </div>
    </div>
  );
};

export default Menu;
