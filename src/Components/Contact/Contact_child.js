import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./Contact_child.css";
import emailjs from 'emailjs-com'; 

const Contact_child = () => {
  function sendEmail(e)  {
    e.preventDefault();
    emailjs.sendForm('service_nla3o8q', 'template_k2gyn8q', e.target, 'user_rbaFUyv8MppoyJZo9AxOz')
      .then((result) => {
        console.log('Email successfully sent!',result.text);
      }, (error) => {
          console.log('Email not sent!',error);
      });
      e.target.reset();
  };
  return (
    <div id="contact_child">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Contact Us</h1>
              <p className="lead">
                Get in touch with us and discuss the needs and requirements of
                your Website Development project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="contact-sec">
        <div className="container">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">
                  1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801 USA
                </div>
                <div className="text-two">
                  ED-3 Scheme no. 97 Ring Road, Near Robot Square,Indore MP
                  (452016)
                </div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+1 (917) 628 2406</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">sales@therapidhire.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Let's Talk About Your Idea</div>
              <form onSubmit={sendEmail}>
                <div className="input-box">
                  <input type="text" name="name" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <textarea
                    rows="4"
                    placeholder="Enter your message"
                    cols="50"
                    name="message"
                  ></textarea>
                </div>
                <div className="button">
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.834995446162!2d-106.94314568446521!3d44.78416917909886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335f009b7255555%3A0xef97aa92cd680505!2s1309%20Coffeen%20Ave%20STE%201200%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1632286156579!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
};

export default Contact_child;
