import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>Welcome to <span>BookMyTable</span></h1>
        <p>Discover and book your favorite restaurants effortlessly.</p>
        <button className="btn-primary">Book a Table</button>
      </div>
    </div>
  );
};

export default Home;
