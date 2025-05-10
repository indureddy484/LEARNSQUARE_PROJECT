<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom"; // ✅ Moved to the top
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
import "./HeaderLayout.css";

const HeaderLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileClick = () => {
<<<<<<< HEAD
    console.log("Profile icon clicked");
=======
    if (user) {
      setProfileDropdown(!profileDropdown);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    setProfileDropdown(false);
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
  };

  return (
    <>
<<<<<<< HEAD
      <header>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
=======
      <header className="main-header">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <nav className="top-navbar">
          <a href="/">Home</a>
          <a href="#">Blogs</a>
          <a href="#">About Us</a>
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
        </nav>

        <div className="search-container">
          <input type="text" placeholder="🔍 Search a product" />
        </div>

<<<<<<< HEAD
        <button className="profile-icon light" onClick={handleProfileClick}>
          👤
=======
        <button className="profile-icon" onClick={handleProfileClick}>
          {/* Show the first letter of the username or email */}
          {user?.email ? user.email.charAt(0).toUpperCase() : "👤"}
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
        </button>

        {profileDropdown && (
          <div className="profile-dropdown">
            <a href="/wishlist">My Wishlist</a>
            <a href="/feedback">Give Feedback</a>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

<<<<<<< HEAD
      <div className="side-menu" id="sideMenu">
        <Link to="/categories">Shop by Categories</Link>
        <Link to="/brands">Shop by Brand</Link>
        <Link to="/wishlist">My Wishlist</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
=======
      {menuOpen && (
        <div className="side-menu">
          <a href="#">Shop by Categories</a>
          <a href="#">Shop by Brand</a>
          <a href="/wishlist">My Wishlist</a>
          <a href="#">Contact Us</a>
        </div>
      )}
>>>>>>> 51158af2d8fdbf8f792cd1240544e28d7542053a
    </>
  );
};

export default HeaderLayout;
