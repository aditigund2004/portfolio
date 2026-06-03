import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Aditi Gund</h2>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#training">Training</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;