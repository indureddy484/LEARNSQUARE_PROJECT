
import React from "react";
import "./HeaderLayout.css";

const HeaderLayout = () => {
  const toggleMenu = () => {
    document.getElementById("sideMenu").classList.toggle("open");
  };

  const handleProfileClick = () => {
    console.log("Profile icon clicked");
    // Future: Navigate to profile page or show dropdown
  };

  return (
    <>
      <header>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
        </nav>
        <div className="search-container">
          <input type="text" placeholder="Search a product" />
        </div>
        <button className="profile-icon light" onClick={handleProfileClick}>
          👤
        </button>
      </header>

      <div className="side-menu" id="sideMenu">
        <a href="#">Shop by Categories</a>
        <a href="#">Shop by Brand</a>
        <a href="#">My Wishlist</a>
        <a href="#">Contact Us</a>
      </div>
    </>
  );
};

export default HeaderLayout;
