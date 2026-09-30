import "./About.css";
import placeholderIcon from "../../images/about-placeholder-icon.svg";

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img className="about__icon" src={placeholderIcon} alt="" />
        <p className="about__placeholder-text">
          <span className="about__span-accent">Placeholder image.</span>Put an
          image of yourself here
        </p>
      </div>
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          This block describes the project author, including their name, job,
          development technologies, and experience at TripleTen.
        </p>
      </div>
    </section>
  );
}

export default About;
