"use client";

import { useEffect, useRef } from "react";
import "./WorldClassSection.css";

export default function WorldClassSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const elements = section.querySelectorAll(".animate-fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="worldclass" className="worldClassSection" ref={sectionRef}>
      <div className="textContainer">
        <h2 className="animate-fade-up">World-Class Photographer</h2>
        <p className="animate-fade-up">
          I capture the moment—wherever you are—with a distinctive, artistic
          style that turns memories into timeless visuals.
        </p>
        <button className="aboutButton animate-fade-up">ABOUT</button>

        <div className="statsContainer">
          <div className="statBox animate-fade-up delay-0">
            {" "}
            {/* appears first */}
            <div className="statNumber">12 yrs</div>
            <div className="statLabel">EXPERIENCE</div>
          </div>
          <div className="statBox animate-fade-up delay-1">
            {" "}
            {/* appears second */}
            <div className="statNumber">50+</div>
            <div className="statLabel">PROJECTS</div>
          </div>
          <div className="statBox animate-fade-up delay-2">
            {" "}
            {/* appears third */}
            <div className="statNumber">1.2m</div>
            <div className="statLabel">FOLLOWERS</div>
          </div>
        </div>
      </div>

      <div className="imageContainer animate-fade-up" />
    </section>
  );
}
