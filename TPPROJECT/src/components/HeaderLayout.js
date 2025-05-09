import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
          <a href="/">Home</a>
          <a href="/">Blogs</a>
          <a href="/">About Us</a>
        </nav>

        <div className="search-container">
          <input type="text" placeholder="🔍 Search a product" />
        </div>

        <div className="profile-icon" onClick={handleProfileClick}>
  {user?.email ? (
    <div className="profile-circle">{user.email.charAt(0).toUpperCase()}</div>
  ) : (
    <div className="profile-circle guest">👤</div>
  )}
</div>

        {profileDropdown && (
          <div className="profile-dropdown">
            <a href="/wishlist">My Wishlist</a>
            <a href="/feedback">Give Feedback</a>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="side-menu">
          <a href="/">Shop by Categories</a>
          <a href="/">Shop by Brand</a>
          <a href="/wishlist">My Wishlist</a>
          <a href="/">Contact Us</a>
        </div>
      )}
    </>
  );
};

export default HeaderLayout;
