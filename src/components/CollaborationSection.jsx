"use client";
import { useState } from "react";
import "./CollaborationSection.css";

export default function CollaborationSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setMessage("Kindly enter a valid email address.");
    } else {
      setMessage("Thank you! Please check your inbox for further updates.");
      setEmail("");
    }
  };

  return (
    <section id="contact" className="CollaborationSection">
      {/* === TITLE + LOGOS === */}
      <div className="companiesBlock">
        <h4>Worked and collaborated with world-class companies</h4>
        <div className="logos">
          <img src="images/logos/logo1.png" alt="Company 1" />
          <img src="images/logos/logo2.png" alt="Company 2" />
          <img src="images/logos/logo3.png" alt="Company 3" />
          <img src="images/logos/logo4.png" alt="Company 4" />
          <img src="images/logos/logo5.png" alt="Company 5" />
          <img src="images/logos/logo6.png" alt="Company 6" />
          <img src="images/logos/logo7.png" alt="Company 7" />
        </div>
      </div>

      {/* === NEWSLETTER + FOOTER === */}
      <div className="newsletterFooter">
        <div className="newsletter">
          <h5>
            Kindly provide your email address, and we will reach out to you with
            valuable updates.
          </h5>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="e.g., mo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
          {message && <p className="feedbackMessage">{message}</p>}
        </div>

        <div className="footerLinks">
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          <p>© Copyright by AltDesain-Studio – All right reserved.</p>
        </div>
      </div>
    </section>
  );
}
