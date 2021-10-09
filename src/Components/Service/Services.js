import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./services.css";
import WebDesign from "../../assets/images/web-design.png";
import WebDevelopment from "../../assets/images/web-development.png";
import ItDatabase from "../../assets/images/it.png";
import Mvp from "../../assets/images/mvp.png";
import AppDevelopment from "../../assets/images/app.png";
import Cloud from "../../assets/images/cloud.png";
import System from "../../assets/images/database.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services = () => {
  return (
    <div id="services">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Our Services</h1>
              <p className="lead">
                We provide industry-specific and need-based services, which
                allows us to deliver tailor-made solutions. We serve customers
                ranging from small individual startups to big corporate houses.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container sec-service">
        <div className="row">
          <div className="col-md-6">
            <img
              data-aos={"fade-right"}
              className="img-fluid web-img"
              src={System}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3>System Development</h3>
              <p>
                TheRapidHire follows the procedure of defining, designing,
                testing, and implementing a new software application or program.
                It includes the internal Development of customized systems, the
                creation of database systems.TheRapidHire works for the
                enhancement and productivity of the organization for the
                satisfaction of its clients.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <section className="web-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-head">
                <h3>WEB DEVELOPMENT</h3>
                <p>
                  {" "}
                  An interactive web application readily amplifies user
                  engagement. Our user-centred web app is feature-rich,
                  intuitive, and performs exceedingly well. We craft your web
                  destination with a clear view of the business goal and ensure
                  that it supports the user-journey.
                </p>
                
              </div>
            </div>
            <div className="col-md-6">
              <img
                data-aos={"fade-left"}
                className="img-fluid web-img"
                src={WebDevelopment}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container sec-service">
        <div className="row">
          <div className="col-md-6">
            <img
              data-aos={"fade-right"}
              className="img-fluid web-img"
              src={ItDatabase}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3> New Product Development</h3>
              <p>
                We believe in bringing new product to the marketplace by
                implementing innovative businesses thrive by understanding our
                marketeers wants, making smart product improvements, and
                developing new products that meet and exceed their customer’s
                expectations
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <section className="web-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-head">
                <h3> Minimum Variable Product (MVP) Development</h3>
                <p>
                  Our team follows MVP development technique in which it
                  introduces a new product in the market with basic features,
                  but enough to get the attention of the Consumers. We launch
                  the final product after sufficient feedback from our product’s
                  initial clients.
                </p>
                
              </div>
            </div>
            <div className="col-md-6">
              <img
                data-aos={"fade-left"}
                className="img-fluid web-img"
                src={Mvp}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              data-aos={"fade-right"}
              className="img-fluid web-img"
              src={AppDevelopment}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3> Data Engineering</h3>
              <p>
                We focus on practical applications of data collection , analysis
                and organizing data by also keeping an eye out for trends or
                inconsistencies that will impact business goals. We build data
                pipelines that source and transform the data into the structures
                needed for analysis. We use tools like SQL and Python to make
                data ready for data scientists
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <section className="web-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="web-head">
                <h3>CLOUD SERVICES</h3>
                <p>
                  Our cloud services provide the options of availing remote
                  services via cloud computing servers. Services included are
                  computing resources, data resources and communication
                  resources. Furthermore, IaaS, PaaS and SaaS platforms are also
                  available for services.
                </p>
                
              </div>
            </div>
            <div className="col-md-6">
              <img
                data-aos={"fade-left"}
                className="img-fluid web-img"
                src={Cloud}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              data-aos={"fade-right"}
              className="img-fluid web-img"
              src={WebDesign}
            />
          </div>
          <div className="col-md-6">
            <div className="web-head">
              <h3>Web Designer</h3>
              <p>
                We are looking for a web designer who will be responsible for
                creating great websites for our clients. Primary duties include
                conceptualizing and implementing creative ideas for client
                websites, as well as creating visual elements that are in line
                with our clients' branding. You will be working closely with our
                web development team to ensure proper and hassle-free
                implementation.
              </p>
              
            </div>
          </div>
        </div>
      </div>
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
export default Services;
