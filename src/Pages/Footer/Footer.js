import React from "react";
import footerVectorLeft from "../../Assets/Footer/footer-vector-left.png";
import { iconsList } from "../../Constants/Constant";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="product-logo-text">
          <h1 className="product-heading">Chilled Grape</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet.
          </p>
        </div>
        <div className="footer-right-container">
          <div className="company-col flex-col">
            <h3>Company</h3>
            <span>About</span>
            <span>Careers</span>
            <span>Our Work</span>
            <span>Contact</span>
          </div>
          <div className="Products-col flex-col">
            <h3>Products</h3>
            <span>About</span>
            <span>Careers</span>
            <span>Our Work</span>
            <span>Contact</span>
          </div>
          <div className="follow-us-col flex-col">
            <h3>Follow Us</h3>
            <div className="social-media-icons-list">
              {iconsList.map(({ src, id }) => (
                <img src={src} alt={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-logo-container">
        <img
          className="footer-vector-left"
          src={footerVectorLeft}
          alt="footer-vector-left"
        />
      </div>
    </footer>
  );
};

export default Footer;
