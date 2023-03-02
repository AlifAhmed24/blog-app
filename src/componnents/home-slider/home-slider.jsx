import React from "react";
import "./home-slider.css";
import "boxicons";

function HomeSlider() {
  return (
    <div className="home-slider">
      <h1>The TopicTrove Blog</h1>
      <p>
        Get tips and advice on delivering exceptional customer service, engaging
        and delighting your customers, and building a customer-centric company.
      </p>
      <form className="search">
        <div className="search-input">
          <input type="text" placeholder="Search for a topic..." />
          <i class='bx bx-search-alt-2'></i>
        </div>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default HomeSlider;
