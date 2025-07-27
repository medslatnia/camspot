"use client";
import { useEffect, useState } from "react";
import "./navbar.css";
import "./CollaborationSection";
import "./WorldClassSection";
import "./ProjectsSection";

export default function Navbar() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHide(scrollY > 500); // hide after 500px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${hide ? "hide-navbar" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">CamSpot</h1>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#worldclass">About</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li className="contact-box">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
