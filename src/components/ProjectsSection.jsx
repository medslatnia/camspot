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
    <section className="ProjectsSection">
      {/* LEFT: Text */}
      <div className="MyProjects">
        <h5>My Projects</h5>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>

        <div className="Working">
          <div className="Title">@ Gwen & Lily .Inc</div>
          <p>Adipiscing elit pellentesque habitant morbi tristique senectus.</p>

          <div className="Title">@ Pixel & Frame</div>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          </p>

          <div className="Title">@ Studio Bright</div>
          <p>Donec sollicitudin molestie malesuada.</p>
        </div>

        <button className="learnMoreBtn">LEARN MORE</button>
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
