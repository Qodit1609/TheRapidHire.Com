import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
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
                    Technology
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
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              <ul>
                <li>
                  <h3>Services</h3>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    System Development
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
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    Cloud Service
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <i className="fas fa-angle-right"></i>
                    Web Designer
                  </Link>
                </li>
              </ul>  
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer_content">
              <ul>
                <li>
                  <h3>General Link</h3>
                </li>
                <li>
                  <Link to="/terms">
                    <i className="fas fa-angle-right"></i>
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to="/policy">
                    <i className="fas fa-angle-right"></i>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact_child">
                    <i className="fas fa-angle-right"></i>
                    Contact Us
                  </Link>
                </li>
              </ul>
              <div class="footer-social-icn">
                <li>
                  <a
                    href="https://www.facebook.com/The-Rapid-Hire-Pvt-Ltd-103302021496799/?modal=admin_todo_tour"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/The-Rapid-Hire-Pvt-Ltd-103302021496799/?modal=admin_todo_tour" 
                  target="_blank" rel="nofollow">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/therapidhire/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="" target="_blank" rel="nofollow">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
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
      <div class="bottom-footer">
        <div class="container">
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-xs-12 text-center">
                  <p>
                    © 2021 The Rapid Hire Pvt. Ltd{" "}
                    <span> All Rights Reserved.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
