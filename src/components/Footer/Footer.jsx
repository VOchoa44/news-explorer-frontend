/* Footer.jsx */
import { NavLink } from "react-router-dom";
import "./Footer.css";
import gitHubIcon from "../../images/github.svg";
import linkedInIcon from "../../images/linkedIn.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <NavLink to="/" className="footer__link">
          Home
        </NavLink>

        <a
          href="https://tripleten.com/"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
        <div className="footer__social">
          <a
            href="https://github.com/VOchoa44"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={gitHubIcon}
              alt="github icon"
              className="footer__social-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vince-a-ochoa"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="linkedin icon"
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
      <p className="footer__copyright">
        &copy; 2026 Supersite, Powered by News API
      </p>
    </footer>
  );
}

export default Footer;
