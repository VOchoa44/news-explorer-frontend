import "./About.css";
import profilePicture from "../../images/profile-picture.png";

function About() {
  return (
    <section className="about">
      <div className="about__image">
        <img
          className="about__profile-picture"
          src={profilePicture}
          alt="profile picture of author"
        />
      </div>
      <div className="about__text">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Vince Ochoa currently works as a Senior Student Services Manager in
          the education technology field. After serving in the U.S. Navy as an
          Information Systems Technician from 2010–2014, Vince went on to earn
          both a bachelor’s and master’s degree in philosophy. With 15+ years of
          experience solving technical, analytical, and operational problems, he
          has transitioned into software engineering. After earning a Software
          Engineering certificate from TripleTen, Vince gained experience
          building web applications with JavaScript, React, Node.js, Express,
          MongoDB, HTML, and CSS. He continues to develop his software
          engineering skills through coding and personal projects, applying the
          same problem-solving approach to building practical, responsive web
          applications.
        </p>
      </div>
    </section>
  );
}

export default About;
