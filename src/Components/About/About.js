import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
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
  const Our_Vision =
  " TheRapidHire Pvt Ltd.  will inspire its employees to be the best they can be. We will engage in sustainable practices and anticipate the needs of our customers.   Our vision is to bring our employees into the 21st century through innovation and modern technology. Learning will be enhanced with computer software and all technologies that will allow employees to proceed at their own rate according to their ability. "

  const Our_Mission =
  "   Our mission is to provide a supercilious support to our customer through our service. We are always aware of new trends in the field of security and are committed to applying it in our solution. We always improvise our services by surveying the interest of our customer. Our goal is to attain massive upgrades and improvements being honest to our principle. TheRapidHire has set certain standards and regulations to be followed so that we will always be giving our priorities to the standards and will always work according to the guidelines set by the govt. and other corresponding authority.";
  
  const Values3 =
  "Having clear company values helps us ensure that all our employees are working towards the same goals. Our core values support the company's vision and shape its culture. That's why our business decision should be aligned with these values. "

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
              Being customer-oriented is an approach in which, rather than solving for the business’s needs, our company solves the customer’s problems first.
              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Creativity} alt="" className="img-fluid" />
              </div>
              <h3>Creativity</h3>
              <p>
              Our Creative thinking can also lead to innovation that will grow our business through increased productivity.  When we “focus on what things we can streamline and what things we need to cut out”              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Meeting} alt="" className="img-fluid" />
              </div>
              <h3>Meeting Deadlines</h3>
              <p>
              Meeting Deadlines help us to collaborate toward achieving a shared goal, and to keep complex,we work multistage projects on track. we set all expectations
              </p>
            </div>
            <div className="col-md-3 choose_us">
              <div className="img_circle">
                <img src={Success} className="img-fluid" alt="" />
              </div>
              <h3>A Plan for Success</h3>
              <p>
              Our Planning helps to critically assess the goal to see in realistic. It facilitates decision making and allows setting a time frame by predicting when our company can achieve its goal.               </p>
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
                <ReactReadMoreReadLess
        charLimit={70}
        readMoreText={"Read more "}
        readLessText={"Read less "}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {Our_Vision}
      </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-content">
                <img src={Mission} alt="Mision" className="img-fluid" />
                <h3>Our Mission</h3>
                <p>
                <ReactReadMoreReadLess
        charLimit={70}
        readMoreText={"Read more "}
        readLessText={"Read less "}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {Our_Mission}
      </ReactReadMoreReadLess>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision-mission-content">
                <img src={Values} alt="Value" className="img-fluid" />
                <h3>Values</h3>
                <p>
                <ReactReadMoreReadLess
        charLimit={70}
        readMoreText={"Read more "}
        readLessText={"Read less "}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {Values3}
      </ReactReadMoreReadLess>
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