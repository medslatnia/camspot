import "./CollaborationSection.css";

export default function CollaborationSection() {
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
          <h5>Subscribe newsletter for interesting information</h5>
          <form>
            <input
              type="email"
              placeholder="Enter your email to subscribe ..."
            />
            <button type="submit">Subscribe</button>
          </form>
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
