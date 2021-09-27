import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Features_Child.css";
import webdesign from "../../assets/images/web2.png";
import webdesign2 from "../../assets/images/design-feature.png";
import webdesign3 from "../../assets/images/teamlead.png";
import webdesign4 from "../../assets/images/2.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Features_Child = () => {
  return (
    <div id="fech">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Our Feature</h1>
              <p className="lead">
                Technology is transforming the way we buy, sell, and do
                everything. We help clients unlock potential and fuel growth
                with software development services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container sec-service">
        <div className="row">
          <div className="col-md-6 feature-img">
            <img
              className="img-fluid"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              src={webdesign}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3>Experienced team</h3>
              <p>
                TheRapidHire furnishes a complete answer for you with inventive
                methodology and high trustworthiness,We let you stay ahead in
                this computerized promoting world through changed
                administrations forthcoming on the lookout and which are as of
                now settled too. With an extraordinary energy for what we work
                on, we permit fervor to remain with us to produce powerful
                answers for our clients.
              </p>
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <section className="web-bg">
        <div className="container sec-service">
          <div className="row">
            <div className="col-md-6">
              <div className="web-head">
                <h3>Diverse technology</h3>
                <p>
                  Our team helps you to increase control over your small
                  business with software designed to grow with you. Streamline
                  all processes, gain greater insight into your business, and
                  make decisions based on real-time information to drive
                  profitable growth.We have faith in making long haul
                  relationships with our customers making a superior association
                  each time we connect.
                </p>
                <button type="button">Read More</button>
              </div>
            </div>
            <div className="col-md-6 feature-img">
              <img
                className="img-fluid"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                src={webdesign2}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container sec-service">
        <div className="row">
          <div className="col-md-6 feature-img">
            <img
              className="img-fluid"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic"
              src={webdesign3}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3>Research and development</h3>
              <p>
                We employ best practice processes and development methodologies
                as a foundation for rapid building of cutting-edge technology
                solutions in a structured and methodical way.We keep elevated
                expectations to contend in the high speed worldwide market and
                give refined programming answers for our customers.
              </p>
              <button type="button">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <section className="web-bg">
        <div className="container sec-service">
          <div className="row">
            <div className="col-md-6">
              <div className="web-head">
                <h3>Availability all the time</h3>
                <p>
                  We have been giving multidimensional IT organizations to our
                  clients including electronic exhibiting and online webpage
                  arranging solutions.we Offer monetarily wise and quick
                  solutions for our clients, we work with a right attitude and
                  thusly execute fittingly. It's not by and large you, it's us.
                </p>
                <button type="button">Read More</button>
              </div>
            </div>
            <div className="col-md-6 feature-img">
              <img
                className="img-fluid"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                src={webdesign4}
              />
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
            <button type="button">Contact Us</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Features_Child;
