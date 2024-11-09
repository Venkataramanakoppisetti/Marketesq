import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <header className="header">
    <div className="logo">Brisphere</div>
    <nav className="nav">
      <Link className="nav-links" to="/">Discover</Link>
      <Link className="nav-links" to="/services">Services</Link>
      <Link className="nav-links" to="/about-us">About Us</Link>
    </nav>
  </header>
);

export default Header;
