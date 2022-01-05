import React from "react";
import Button from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  function handleSubmit(input) {
    alert(`Email Submitted! ${input}`);
  }

  function handleClick(e) {
    let val = e.target.closest("form").children[0];
    handleSubmit(val.value);
    val.value = "";
  }

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals!
        </p>
        <p className="footer-subscription-text">
          (You can unsubscribe at any time.)
        </p>
        <div className="input-areas">
          <form action="" onSubmit={handleSubmit}>
            <input
              className="footer-input"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <Button onClick={handleClick} buttonStyle="btn--outline">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/sign-up">Testimonials</Link>
            <Link to="/sign-up">Careers</Link>
            <Link to="/sign-up">Terms of Service</Link>
            <Link to="/sign-up">Investors</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/sign-up">Contact</Link>
            <Link to="/sign-up">Support</Link>
            <Link to="/sign-up">Destinations</Link>
            <Link to="/sign-up">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">Submit Video</Link>
            <Link to="/sign-up">Ambassadors</Link>
            <Link to="/sign-up">Agency</Link>
            <Link to="/sign-up">Influencer</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Facebook</Link>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/sign-up">YouTube</Link>
            <Link to="/sign-up">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              <h4>XPL</h4>
              <i className="fas fa-meteor"></i>
              <h4>R</h4>
            </Link>
          </div>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
                to="/"
                className="social-icon-link"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link"
              target="_blank"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              className="social-icon-link"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
          <small className="website-rights">XPLOR &copy; 2022</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
