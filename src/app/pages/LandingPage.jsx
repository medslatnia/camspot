import styles from "../styles/Landing.module.css";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className={styles.landingWrapper}>
        <div className={styles.landingImage}></div>
        <div className={styles.landingContent}>
          <h1>Hi, I'm David Gonzalez</h1>
          <p>
            Your trusted photographer for any scenario, any place, and any date.
            I'm here to take those shots for you.
          </p>
          <div className={styles.landingLabels}>
            <span className={styles.label}>🧑‍🎤 Professional Photographer</span>
            <span className={styles.label}>📸 Famous Influencer</span>
          </div>
          <div className={styles.contactBox}>
            <input
              type="tel"
              placeholder="Enter your phone number.."
              className={styles.phoneInput}
            />
            <button className={styles.contactButton}>Get in Touch</button>
          </div>
          <div className={styles.hireMeBox}>
            <p className={styles.hireText}>Hire me for a professional job</p>
            <button className={styles.hireButton}>PORTFOLIO</button>
          </div>
        </div>
      </div>

      {/* 👇 New Section */}
      <section className={styles.nextSection}>
        <h2>Why Choose Me?</h2>
        <p>
          I provide professional photography services with fast delivery and
          full creativity.
        </p>
      </section>
    </>
  );
}
