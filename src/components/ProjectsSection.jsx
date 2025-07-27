"use client";
import "./ProjectsSection.css";
import { useEffect } from "react";
import { animateOnScroll } from "./fadeInOnScroll";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  useEffect(() => {
    animateOnScroll();
  }, []);
  return (
    <section id="projects" className="ProjectsSection">
      {/* LEFT: Text */}
      <div className="MyProjects">
        <h5>My Projects</h5>
        <p>
          From web apps to creative platforms, my projects reflect a passion for
          clean design, smart functionality, and real-world impact. Each build
          is a step forward in innovation, usability, and visual storytelling.
        </p>

        <div className="Working">
          <div className="Title">@ Gwen & Lily .Inc</div>
          <p>
            Capturing moments with elegance and authenticity — Gwen & Lily .Inc
            is where timeless photography meets modern creativity.
          </p>

          <div className="Title">@ Pixel & Frame</div>
          <p>
            Turning stories into stills — Pixel & Frame delivers bold, emotive
            photography tailored for every moment that matters.
          </p>

          <div className="Title">@ Studio Bright</div>
          <p>
            Where light meets artistry — Studio Bright specializes in vibrant,
            heartfelt photography that brings every detail to life.
          </p>
        </div>

        <button className="learnMoreBtn">MORE</button>
      </div>

      {/* RIGHT: Image Grid */}
      <div className="ProjectsImages">
        <div className="photoGrid">
          <img src="/images/1.jpg" alt="Project 1" />
          <img src="/images/2.jpg" alt="Project 2" />
          <img src="/images/3.jpg" alt="Project 3" />
          <img src="/images/4.jpg" alt="Project 4" />
          <img src="/images/5.jpg" alt="Project 5" />
          <img src="/images/6.jpg" alt="Project 6" />
        </div>
      </div>
    </section>
  );
}
