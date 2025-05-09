import React from "react";
import { Link } from "react-router-dom"; // ✅ Moved to the top
import "./HeaderLayout.css";

const HeaderLayout = () => {
  const toggleMenu = () => {
    document.getElementById("sideMenu").classList.toggle("open");
  };

  const handleProfileClick = () => {
    console.log("Profile icon clicked");
  };

  return (
    <>
      <header>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="Search a product" />
        </div>

        <button className="profile-icon light" onClick={handleProfileClick}>
          👤
        </button>
      </header>

      <div className="side-menu" id="sideMenu">
        <Link to="/categories">Shop by Categories</Link>
        <Link to="/brands">Shop by Brand</Link>
        <Link to="/wishlist">My Wishlist</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </>
  );
};

export default HeaderLayout;
