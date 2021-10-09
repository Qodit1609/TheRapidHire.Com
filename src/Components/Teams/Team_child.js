import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Team_child.css";
import webdesign from "../../assets/images/teamlead.png";
import s2 from "../../assets/images/Shraddhha.jpg";
import s3 from "../../assets/images/pp.jpg";
import s4 from "../../assets/images/Nitin.jpg";
import s5 from "../../assets/images/avinash.jpeg";
import s6 from "../../assets/images/ankita.jpeg";
import s7 from "../../assets/images/krishana.jpeg";
import client from "../../assets/images/1(cleints).jpg";
import client1 from "../../assets/images/3.jpg";
import client2 from "../../assets/images/2(client).jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Team_child = () => {
  return (
    <div id="team_child">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Meet Our Team</h1>
              <p className="lead">
                The way a team plays as a whole determines its success. You may
                have the greatest bunch of individual stars in the world. We can
                all do small things, with great love, and together we can do
                something wonderful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="home-info-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>EXPERIENCED TEAM</h2>
              <p>
                TheRapidHire furnishes a complete answer for you with inventive
                methodology and high trustworthiness,We let you stay ahead in
                this computerized promoting world through changed
                administrations forthcoming on the lookout and which are as of
                now settled too.
              </p>
            </div>
            <div className="col-md-5 drop-cap-text">
              <img
                src={webdesign}
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
      <section className="team1">
        <div className="container mt-5 d-flex justify-content-center ">
          <div className="row1">
            <div className="container text-center content">
              <h2>INNOVATIVE TEAM</h2>
              <p>
                The way a team plays as a whole determines its success. You may
                have the greatest bunch of individual stars in the world. We can
                all do small things, with great love, and together we can do
                something wonderful.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s2} className="rounded-circle" />
                  </div>
                  <div className="h3">Shraddha Sharma</div>
                  <p className="designation text-muted text-uppercase">
                    {" "}
                    Business Development Executive
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>
                   
                  </li>
                  <li>
                 
                  </li>
                  <li>
                  
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s3} className="rounded-circle" />
                  </div>
                  <div className="h3">Vikas Choudhary</div>
                  <p className="designation text-muted text-uppercase">
                    Web Developer
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>

                  </li>
                  <li>
                   
                  </li>
                  <li>
                   
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s4} className="rounded-circle" />
                  </div>
                  <div className="h3">Nitin vishvakarma</div>
                  <p className="designation text-muted text-uppercase">
                    Web Developer
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>
                   
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                  <li>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s5} className="rounded-circle" />
                  </div>
                  <div className="h3">Avinash Malakar</div>
                  <p className="designation text-muted text-uppercase">
                    Software developer
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>
                   
                  </li>
                  <li>
                 
                  </li>
                  <li>
                  
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s6} className="rounded-circle" />
                  </div>
                  <div className="h3">Ankita Yadav</div>
                  <p className="designation text-muted text-uppercase">
                    Software Developer
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>
                   
                  </li>
                  <li>
                 
                  </li>
                  <li>
                  
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="card d-flex flex-column align-items-center justify-content-center">
                <div className="inner-content d-flex flex-column align-items-center justify-content-center">
                  <div className="img-container rounded-circle">
                    <img src={s7} className="rounded-circle" />
                  </div>
                  <div className="h3">Krishana Makwana</div>
                  <p className="designation text-muted text-uppercase">
                    Software Developer
                  </p>
                </div>
                <ul className="social-links d-flex align-items-center justify-content-around list-unstyled w-100 fs-5 m-0 p-0">
                  <li>
                   
                  </li>
                  <li>
                 
                  </li>
                  <li>
                  
                  </li>
                  <li>
                  
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section className="team2">
        <div className="container mt-5 d-flex justify-content-center ">
          <div className="row2">
            <div className="container text-center content">
              <h2>"Testimonial"</h2>
              <p>
                The way a team plays as a whole determines its success. You may
                have the greatest bunch of individual stars in the world. We can
                all do small things, with great love, and together we can do
                something wonderful.
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5 mb-5">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card-img p-3 text-center px-4">
                <div className="user-image">
                  <img
                    src={client2}
                    className="img-fluid"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                  />
                  {/* 
              <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80"> */}
                </div>
                <div className="user-content">
                  <h5 className="mb-0">Junl Sarukh</h5>
                  <span>CEO Of Softing</span>
                  <p>
                    We would like to express our satisfaction on the
                    co-operation regarding the development of our web
                    application. TheRapidHire and the development team did a
                    very professional job. We are satisfied with the solution
                    given to us and with the communication flow through the
                    project.
                  </p>
                </div>
                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-img p-3 text-center px-4">
                <div className="user-image">
                  <img
                    src={client}
                    className="img-fluid"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                  />
                </div>
                <div className="user-content">
                  <h5 className="mb-0">Anil Spia</h5>
                  <span>Director Of Softing</span>
                  <p>
                    We thank TheRapidHire for the wonderful job in helping us
                    develop our program. Everyone was professional, excellent
                    and hard working. Thanks to them, we were able to achieve
                    our goal on time, and we look forward to continue working
                    with them in the future.
                  </p>
                </div>
                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-img p-3 text-center px-4">
                <div className="user-image">
                  <img
                    src={client1}
                    className="img-fluid"
                    width="70px"
                    height="70px"
                    className="rounded-circle"
                  />
                </div>
                <div className="user-content">
                  <h5 className="mb-0">Paul Munni</h5>
                  <span>Developer Of Softing</span>
                  <p>
                    Congratulations to all TheRapidHire for achieving this
                    milestone (of completing 1 year in the software industry).
                    Keep up the good work!
                  </p>
                </div>
                <div className="ratings">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /* end testimonial */}
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
export default Team_child;
