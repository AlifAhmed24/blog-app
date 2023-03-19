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
            Trending<span>Wavez</span>
          </h2>
        </div>

        <div className="menuWrapper">
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
            <i
              onClick={clickHandle}
              id="moreList"
              class="bx bx-dots-vertical-rounded"
            ></i>
          </div>
          <div className="more-menu">
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
        <a href="/cpanel:201" className="write">
        <i class='bx bxs-edit'></i>
        <span>Write</span>
        </a>
      </div>
    </nav>
  );
}

export default HomeNav;
