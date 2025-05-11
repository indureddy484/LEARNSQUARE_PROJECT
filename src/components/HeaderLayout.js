
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./HeaderLayout.css";

const HeaderLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleProfileClick = () => {
    console.log("Profile icon clicked");
    if (user) {
      setProfileDropdown(!profileDropdown);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    setProfileDropdown(false);
  };

  return (
    <>
      <header className="main-header">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <nav className="top-navbar">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="🔍 Search a product" />
        </div>

        <button className="profile-icon" onClick={handleProfileClick}>
          {user?.email ? user.email.charAt(0).toUpperCase() : "👤"}
        </button>

        {profileDropdown && (
          <div className="profile-dropdown">
            <Link to="/wishlist">My Wishlist</Link>
            <Link to="/feedback">Give Feedback</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="side-menu" id="sideMenu">
          <Link to="/categories">Shop by Categories</Link>
          <Link to="/brands">Shop by Brand</Link>
          <Link to="/wishlist">My Wishlist</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      )}
    </>
  );
};

export default HeaderLayout;
