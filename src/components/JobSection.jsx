"use client";
import "./JobSection.css";
import { useEffect, useRef } from "react";

export default function JobSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const fills = section.querySelectorAll(".fill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fills.forEach((fill) => {
              const targetWidth = fill.getAttribute("data-width");
              fill.style.width = targetWidth;
            });
            observer.disconnect(); // Stop after triggering once
          }
        });
      },
      { threshold: 0.4 }
    );

    if (section) observer.observe(section);
  }, []);

  return (
    <section className="skillsSection" ref={sectionRef}>
      <div className="skillsText">
        <h2>Job Specialization</h2>
        <p>
          With a sharp eye for detail and a passion for storytelling, I
          specialize in professional photography, creative Photoshop editing,
          and effective visual communication.
        </p>
        <p>
          From capturing stunning moments to refining images with precision, I
          bring both technical skill and artistic vision to every project.
        </p>

        <div className="skill">
          <div className="skillBar">
            <div className="fill" data-width="95%"></div>
            <span>Photography – 95%</span>
          </div>
        </div>
        <div className="skill">
          <div className="skillBar">
            <div className="fill" data-width="90%"></div>
            <span>Photoshop – 90%</span>
          </div>
        </div>
        <div className="skill">
          <div className="skillBar">
            <div className="fill" data-width="95%"></div>
            <span>Communication – 95%</span>
          </div>
        </div>
      </div>

      <div className="skillsImage">
        <img src="/images/grey.jpg" alt="Photo 1" />
      </div>

      <div className="skillsImage">
        <img src="/images/yellow2.jpg" alt="Photo 2" />
      </div>
    </section>
  );
}
