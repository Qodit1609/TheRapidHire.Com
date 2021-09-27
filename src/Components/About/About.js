import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import WhoWe from "../../assets/images/about.png";
import Mission from "../../assets/images/mission.png";
import Vision from "../../assets/images/vision.png";
import Values from "../../assets/images/value.png";
import Creativity from "../../assets/images/creativity.png";
import Meeting from "../../assets/images/meeting.png";
import Success from "../../assets/images/success.png";
import Client from "../../assets/images/client.png";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  return (
    <div id="about">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center" data-aos="zoom-in">
            <div className="col-12 text-center">
              <h1 className="fw-light">about us</h1>
              <p className="lead">
                TheRapidHire is a software development and IT outsourcing
                company based in India. TheRapidHiretakes an energetic,
                collaborative strategy to create and customize solutions across
                the digital value chain. .
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="who-we">
                <h1>Who we are</h1>
                <p>
                  TheRapidHire is a software development and IT outsourcing
                  company based in India. TheRapidHiretakes an energetic,
                  collaborative strategy to create and customize solutions
                  across the digital value chain. We aim to create a network of
                  businesses that help each other to acquire more customers.
                  Giving a better idea of making your online presence better,
                  TheRapidHirecompany helps you with quality service at minimal
                  prices and complimentary with great satisfaction.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={WhoWe}
                data-aos={"fade-left"}
                className="img-fluid who-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-sec about-bg">
        <div className="container">
          <div className="why-choose">
            <h1>Why Choose Us?</h1>
          </div>
          <div className="row pt-5">
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Client} className="img-fluid" alt="" />
              </div>
              <h3>Client Oriented</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Creativity} alt="" className="img-fluid" />
              </div>
              <h3>Creativity</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Meeting} alt="" className="img-fluid" />
              </div>
              <h3>Meeting Deadlines</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Success} className="img-fluid" alt="" />
              </div>
              <h3>A Plan for Success</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="vision-mission-content">
                <img src={Vision} alt="Vision" className="img-fluid" />
                <h3>Our Vision</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-content">
                <img src={Mission} alt="Mision" className="img-fluid" />
                <h3>Our Mission</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-content">
                <img src={Values} alt="Value" className="img-fluid" />
                <h3>Values</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-bg">
        <div className="container">
          <div className="contact-description">
            <h1>
              Get in touch with us and discuss the needs and requirements of
              your Website Development project.
            </h1>
            <button type="button">
              <Link to="contact_child">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default About;
