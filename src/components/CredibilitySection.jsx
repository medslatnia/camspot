"use client";
import { useEffect, useRef } from "react";
import "./CredibilitySection.css";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ProjectsSection" ref={sectionRef}>
      <div className="gridContainer">
        <div className="leftText">
          <h5>
            Professionalism and{" "}
            <span className="highlightYellow">high credibility</span> in my work
            are things I always maintain consistently.
          </h5>
        </div>
        <div className="rightText">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque habitant morbi tristique senectus.
          </p>
        </div>
        <div className="fullImage">
          <img src="/images/Rectangle.png" alt="Project showcase" />
        </div>
      </div>
    </section>
  );
}
