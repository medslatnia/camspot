"use client";
import { useEffect } from "react";
import styles from "../styles/Landing.module.css";
import Navbar from "@/components/Navbar";
import CollaborationSection from "@/components/CollaborationSection";

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(`.${styles.fadeInOnScroll}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section id="home">
        <div className={styles.landingWrapper}>
          <div className={styles.landingImage}></div>
          <div className={styles.landingContent}>
            <h1 className={styles.fadeInOnScroll}>Hi, I'm David Gonzalez</h1>
            <p className={styles.fadeInOnScroll}>
              Your trusted photographer for any scenario, any location, and any
              date—I'm here to capture the shots that matter most, wherever and
              whenever you need them.
            </p>

            <div className={`${styles.landingLabels} ${styles.fadeInOnScroll}`}>
              <div className={styles.label}>
                <div className={styles.iconCircle}>
                  <img
                    src="/images/logos/camera.png"
                    alt="Camera"
                    className={styles.iconImage}
                  />
                </div>
                <p>Professional Photographer</p>
              </div>
              <div className={styles.label}>
                <div className={styles.iconCircle}>
                  <img
                    src="/images/logos/Vector.png"
                    alt="People"
                    className={styles.iconImage}
                  />
                </div>
                <p>Famous Influencer</p>
              </div>
            </div>

            <div className={`${styles.buttonRow} ${styles.fadeInOnScroll}`}>
              <a href="#projects" className={styles.portfolioButton}>
                PORTFOLIO
              </a>
              <a href="#contact" className={styles.hireButton}>
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
