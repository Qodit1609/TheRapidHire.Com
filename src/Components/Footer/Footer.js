import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="footer_content">
              <ul>
                <li>
                  <h3>Services</h3>
                </li>
                <li>
                  <Link to="/team">
                    <i className="fas fa-angle-right"></i>
                    Dedicated Teams
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    Web Devlopment
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    IT & Database
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    App Developers
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    Web Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footer_content">
              <ul>
                <li>
                  <h3>Quick Link</h3>
                </li>
                <li>
                  <Link to="/">
                    <i className="fas fa-angle-right"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <i className="fas fa-angle-right"></i>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Technology">
                    <i className="fas fa-angle-right"></i>
                    Company History
                  </Link>
                </li>
                <li>
                  <Link to="/features">
                    <i className="fas fa-angle-right"></i>
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/team">
                    <i className="fas fa-angle-right"></i>
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="footer_content">
              <ul>
                <li>
                  <h3>Contact Info</h3>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="info">
                    <h5>WEBSITE:</h5>
                    <a href="https://therapidhire.com">therapidhire.com</a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info">
                    <h5>Email:</h5>
                    <a href="mailto:sales@therapidhire.com">
                      sales@therapidhire.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="info">
                    <h5>Phone:</h5>
                    <a href="tel:+1 (917) 628 2406">+1 (917) 628 2406</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
