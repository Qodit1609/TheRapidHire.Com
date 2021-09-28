import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Technology_child.css";
import Ricon from "../../assets/images/webdesigner.png";
import webdesin from "../../assets/images/techno.jpg";
import Ricon2 from "../../assets/images/jquery.png";
import Ricon3 from "../../assets/images/vue.png";
import Ricon4 from "../../assets/images/bootstrap.png";
import Ricon5 from "../../assets/images/ember.png";
import java1 from "../../assets/images/javaicon.png";
import java2 from "../../assets/images/php4.png";
import java3 from "../../assets/images/mango-db.png";
import java4 from "../../assets/images/wordpress.png";
import java5 from "../../assets/images/m.png";
import java6 from "../../assets/images/iot.png";
import iot1 from "../../assets/images/azure.png";
import iot2 from "../../assets/images/cloud.jpg";
import iot3 from "../../assets/images/vue.png";
import iot4 from "../../assets/images/firebase.png";
import iot5 from "../../assets/images/google_cloud.png";
import iot6 from "../../assets/images/k.png";
import iot7 from "../../assets/images/k1.png";
import technology2 from "../../assets/images/k3.png";
import technology3 from "../../assets/images/k5.png";
import technology4 from "../../assets/images/k7.png";
import technology5 from "../../assets/images/mern.jpg";
import technology6 from "../../assets/images/no-sql.png";
import technology7 from "../../assets/images/oracle-sql.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Technology_child = () => {
  return (
    <div id="technology_child">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Our Technology</h1>
              <p className="lead">
                Technology is transforming the way we buy, sell, and do
                everything. We help clients unlock potential and fuel growth
                with software development services.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <section className="home-info-grey pb-3">
        <div className="container">
          <div className="row ">
            <div className="col-md-7">
              <div className="our-tech">
                <h2>Our Technology</h2>
                <p>
                  Welcome To Conet Technologies. Conet Technologies was born out
                  of our passion to offer Innovative and State of the Art
                  Technology Products & solutions for emerging Industrial and
                  commercial requirements in the realm of Aerospace & Defense,
                  Semiconductors, Broadcast, Telecommunication, Wireless,
                  Communication NEM, Education segments, Renewable energy & IT.
                </p>
              </div>
            </div>
            <div className="col-md-5 drop-cap-text">
              <img
                src={webdesin}
                className="iamge2 img-fluid"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section our */}
      <section className="icon3">
        <div className="container rounded">
          <div className="h1 fw-bold text-center mt-2">OUR EXPERTISE </div>

          <div className="fs-5 text-center pb-3 mb-3">
            We help clients harness the power and scope of the digital world for
            enhanced business performance and awareness.
          </div>
          <div className="rollers position-relative overflow-hidden">
            <div className="start-roller"></div>
            <div className="wrapper">
              <div className="items-container roll-LL">
                <div className="item">
                  <img src={java1} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={java2} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={java3} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={java4} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={java5} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={java6} className="image1" width="70px" height="50px" />
                </div>
              </div>
              <div className="items-container roll-RL">
                <div className="item">
                  <img src={iot1} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={iot2} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={iot3} className="image1" />
                </div>
                <div className="item">
                  <img src={iot4} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={iot5} className="image1" width="60px" height="50px" />
                </div>
                <div className="item">
                  <img src={iot6} className="image1" width="70px" height="50px" />
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="items-container reverse-roll-LL">
                <div className="item">
                  <img src={iot7} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={Ricon2} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={Ricon3} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={Ricon4} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={Ricon5} className="image1" width="70px" height="50px" />
                </div>
                <div className="item">
                  <img src={Ricon} className="image1" width="70px" height="50px" />
                </div>
              </div>
              <div className="items-container reverse-roll-RL">
                <div className="item">
                  <img
                    src={technology2}
                    className="image1"
                    width="70px"
                    height="50px"
                  />
                </div>
                <div className="item">
                  <img
                    src={technology3}
                    className="image1"
                    width="70px"
                    height="50px"
                  />
                </div>
                <div className="item">
                  <img
                    src={technology4}
                    className="image1"
                    width="70px"
                    height="50px"
                  />
                </div>
                <div className="item">
                  <img
                    src={technology5}
                    className="image1"
                    width="60px"
                    height="50px"
                  />
                </div>
                <div className="item">
                  <img
                    src={technology6}
                    className="image1"
                    width="70px"
                    height="50px"
                  />
                </div>
                <div className="item">
                  <img
                    src={technology7}
                    className="image1"
                    width="70px"
                    height="50px"
                  />
                </div>
              </div>
            </div>
            <div className="end-roller"></div>
          </div>
        </div>
      </section>
      {/*  */}

      <section className="technlogy2 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <img src={java1} className="image1" width="60px" height="50px" />
                  <p className="item-title">
                    <h3> Java</h3>
                  </p>
                  <p>
                    {" "}
                    Experience in core Java advanced programming,Experience in
                    Spring Hibernate is mandatory.Experience in building
                    mechanisms like Maven.Good knowledge on design patterns and
                    anti-patterns. Good in algorithms and data structures. Good
                    understanding of Database concepts and Experience in SQL,
                    PLSQL and NoSQL. Excellent Analytical and program solving
                    skills .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  {" "}
                  <img src={java3} className="image1" width="60px" height="50px" />
                  <p className="item-title">
                    <h3> Mango-DB</h3>
                  </p>
                  <p>
                    {" "}
                    Our company is looking for a talented Magento 1 and/or 2
                    developer that will be in charge of maintaining our
                    eCommerce website. Your main tasks will be to ensure that
                    the last security patches are installed and that existing
                    functionality continues to work properly. You will also be
                    in charge of developing new modules and applying any
                    required front-end changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  {" "}
                  <img src={java2} className="image1" width="60px" height="50px" />
                  <p className="item-title">
                    <h3> PHP </h3>
                  </p>
                  <p>
                    {" "}
                    We are looking for a PHP Developer responsible for managing
                    back-end services and the interchange of data between the
                    server and the users. Your primary focus will be the
                    development of all server-side logic, definition and
                    maintenance of the central database, and ensuring high
                    performance and responsiveness to requests from the
                    front-end.{" "}
                  </p>
                </div>
              </div>
            </div>
         

         
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  <img src={java5} className="image1" width="30px" height="30px" />
                  <p className="item-title">
                    <h3> Mern Stack</h3>
                  </p>
                  <p>
                    {" "}
                    We are looking for a MERN Stack Developer to produce
                    scalable software solutions. You’ll be part of a
                    cross-functional team that’s responsible for the full
                    software development life cycle, from conception to
                    deployment. As a Full Stack Developer, you should be
                    comfortable around both front-end and back-end coding
                    languages
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  {" "}
                  <img src={Ricon} className="image1" width="60px" height="50px" />
                  <p className="item-title">
                    <h3>Web Designer </h3>
                  </p>
                  <p>
                    We are looking for a web designer who will be responsible
                    for creating great websites for our clients. Primary duties
                    include conceptualizing and implementing creative ideas for
                    client websites, as well as creating visual elements that
                    are in line with our clients' branding.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 Services-tab item">
              <div className="folded-corner service_tab_1">
                <div className="text">
                  {" "}
                  <img src={java4} className="image1" width="60px" height="50px" />
                  <p className="item-title">
                    <h3> Wordpress</h3>
                  </p>
                  <p>
                    {" "}
                    We are seeking a WordPress Developer responsible for both
                    back-end and front-end development, including creating
                    WordPress themes and plugins. This position requires a
                    combination of programming skills (namely PHP, HTML5, CSS3,
                    and JavaScript) and aesthetics (understanding element)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-bg">
        <div className="container3">
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

export default Technology_child;
