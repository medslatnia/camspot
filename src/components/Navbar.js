"use client";
import { useEffect, useState } from "react";
import "./navbar.css";

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
      <h1 className="logo">CamSpot</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
