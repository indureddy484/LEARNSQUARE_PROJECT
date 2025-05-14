import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./HeaderLayout.css";

const HeaderLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <>
      <header className="main-header">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>

        <nav className="top-navbar">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Search a product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <div className="profile-icon" onClick={handleProfileClick}>
          <div className={`profile-circle ${!user ? "guest" : ""}`}>
            {user?.email ? user.email.charAt(0).toUpperCase() : "👤"}
          </div>
        </div>

        {profileDropdown && (
          <div className="profile-dropdown">
            <Link to="/wishlist">My Wishlist</Link>
            <Link to="/feedback">Give Feedback</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </header>

      {menuOpen && (
        <div className="side-menu">
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
