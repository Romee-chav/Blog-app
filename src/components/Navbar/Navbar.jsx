import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${shadow ? "shadow" : ""}`}>
      {/* Logo */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img className="logoImg" src={logo} alt="MindScribe Logo" />
        Mind<span>Scribe</span>
      </Link>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <div className={`nav-center ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </div>

      {/* Auth */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/login" className="auth-btn" onClick={closeMenu}>
          Login
        </Link>
        <Link to="/signup" className="auth-btn" onClick={closeMenu}>
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
