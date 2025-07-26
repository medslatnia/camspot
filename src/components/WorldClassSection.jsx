"use client";

import "./WorldClassSection.css"; // ✅ regular CSS file

export default function WorldClassSection() {
  return (
    <section className="worldClassSection">
      <div className="textContainer">
        <h2>World Class Photographer</h2>
        <p>I capture the moment, wherever you are, with a unique style...</p>
        <button>ABOUT</button>
      </div>
      <div className="imageContainer"></div>
    </section>
  );
}
