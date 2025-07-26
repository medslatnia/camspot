"use client";
import { useEffect } from "react";
import styles from "../styles/Landing.module.css";
import Navbar from "@/components/Navbar";

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
            <span className={styles.label}>🧑‍🎤 Professional Photographer</span>
            <span className={styles.label}>📸 Famous Influencer</span>
          </div>

          <div className={`${styles.contactBox} ${styles.fadeInOnScroll}`}>
            <input
              type="tel"
              placeholder="Enter your phone number.."
              className={styles.phoneInput}
            />
            <button className={styles.contactButton}>Get in touch</button>
          </div>

          <div className={`${styles.hireMeBox} ${styles.fadeInOnScroll}`}>
            <p className={styles.hireText}>Hire me for a professional job</p>
            <button className={styles.hireButton}>PORTFOLIO</button>
          </div>
        </div>
      </div>
    </>
  );
}
