import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function HomeNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function clickHandle() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const moreList = document.querySelector(".menuInList");
    if (moreList) {
      if (isMenuOpen) {
        moreList.style.display = "block";
      } else {
        moreList.style.display = "none";
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    document.addEventListener("click", (ev) => {
      console.log(ev.target);
    });
  }, []);

  useEffect(() => {
    const cont = document.querySelector(".container");
    const moreList = document.querySelector(".menuInList");

    cont.addEventListener("click", (ev) => {
      moreList.style.display = "none";
      setIsMenuOpen(isMenuOpen);
    });
  }, []);



  return (
    <nav>
      <div className="navTop">
        <div className="logo">
          <h2>
            Topic<span>Trove</span>
          </h2>
        </div>
        <div className="search">
          <input
            id="searchBar"
            type="text"
            placeholder="Search for a topic..."
          />
          <i id="top-search" class="bx bx-search-alt-2"></i>
        </div>
        <div className="login">
          <a href="#">login</a>
        </div>
      </div>
      <div className="navBottom">
        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/lifestyle">Life Style</Link>
          <Link to="/health">Health</Link>
          <Link to="/fashion">Fashion</Link>
          <Link to="/foodandcooking">Food and Cooking</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/business">Business</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/education">Education</Link>
        </div>
        <div className="more-menu">
          <i
            onClick={clickHandle}
            id="moreList"
            class="bx bx-dots-vertical-rounded"
          ></i>
          <div className="menuInList">
            <Link to="/">Home</Link>
            <Link to="/lifestyle">Life Style</Link>
            <Link to="/health">Health</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/foodandcooking">Food and Cooking</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/business">Business</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/education">Education</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HomeNav;
