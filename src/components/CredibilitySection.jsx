import "./CredibilitySection.css";

export default function ProjectsSection() {
  return (
    <section className="ProjectsSection">
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
