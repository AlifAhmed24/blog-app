import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [siderbarIsOpen, setSiderbarIsOpen] = useState(true);

  function handleClick() {
    if (!menuIsOpen) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  }

  function handleClickSidebar() {
    if (!siderbarIsOpen) {
      setSiderbarIsOpen(true);
    } else {
      setSiderbarIsOpen(false);
    }
  }


  return (
    <div className="cpanel">
    <div className="menu-icon">
    
    {!siderbarIsOpen ? 
     <i onClick={handleClickSidebar} class='bx bx-menu' ></i> :
     <i onClick={handleClickSidebar} class='bx bx-x' ></i> }
    </div>
      {siderbarIsOpen ? 
        <aside className="sideBar">
        <h1>Admin Panel</h1>
        <div className="menu-list">
          <ul>
          <li className="home">
              <Link to="/">
                <i class='bx bx-home-alt-2'></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/cpanel:201/write">
                <i class="bx bxs-edit"></i>
                <span>Write</span>
              </Link>
            </li>
            <li onClick={handleClick}>
              <i
                style={{ transform: `rotate(${menuIsOpen ? "90deg" : "0"})` }}
                class="bx bx-chevron-right"
              ></i>
              <span>Article</span>
            </li>
            

            {menuIsOpen && (
              <div className="sideBarList">
                <Link to="/cpanel:201/article/Life Style">Life Style</Link>
                <Link to="/cpanel:201/article/Health">Health</Link>
                <Link to="/cpanel:201/article/Fashion">Fashion</Link>
                <Link to="/cpanel:201/article/Food and Cooking">
                  Food and Cooking
                </Link>
                <Link to="/cpanel:201/article/Technology">Technology</Link>
                <Link to="/cpanel:201/article/Business">Business</Link>
                <Link to="/cpanel:201/article/Sports">Sports</Link>
                <Link to="/cpanel:201/article/Education">Education</Link>
              </div>
            )}
          </ul>
        </div>
      </aside> :
      ''
      }
    </div>
  );
}
