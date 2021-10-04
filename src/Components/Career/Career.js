import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory , Link} from "react-router-dom";
import "./Career.css";
import Fun from "../../assets/images/fun.jpg";
import Mentorship from "../../assets/images/Mentorship.jpg";
import Benefits from "../../assets/images/Benefits.jpg";
import Arrow from "../../assets/images/right-arrow.png";
import Location from "../../assets/images/placeholder.png";
import Right from "../../assets/images/right.png";
import $ from "jquery";


const Career = () => {
  const history= useHistory()



return (
<div id="career">
   <Header />
   <div className="service-bg cover-background">
      <div className="container h-100">
         <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
               <h1 className="fw-light">Careers</h1>
               <p className="lead">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1700s, when an unknown printer took a galley
                  of type and scrambled it to make a type specimen book.
               </p>
            </div>
         </div>
      </div>
   </div>
   <section className="sec-career">
      <div className="container">
         <div className="career-head">
            <h1>Our Value</h1>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1700s specimen book.
            </p>
         </div>
         <div class="row">
            <div
               class="col-md-4 text-center aos-init aos-animate"
               data-aos="fade-right"
               data-aos-delay="100"
               >
               <div class="row">
                  <div class="col-md-12">
                     <img class="img-fluid" src={Fun} alt="Career" />
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 careerPage">
                     <h2>Have Fun</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1700s specimen book.
                     </p>
                  </div>
               </div>
            </div>
            <div
               class="col-md-4 text-center aos-init aos-animate"
               data-aos="fade-up"
               data-aos-delay="100"
               >
               <div class="row">
                  <div class="col-md-12">
                     <img class="img-fluid" src={Mentorship} alt=" Career" />
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 careerPage">
                     <h2>Mentorship</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1700s specimen book.
                     </p>
                  </div>
               </div>
            </div>
            <div
               class="col-md-4 text-center aos-init aos-animate"
               data-aos="fade-left"
               data-aos-delay="100"
               >
               <div class="row">
                  <div class="col-md-12">
                     <img class="img-fluid" src={Benefits} alt=" Career" />
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 careerPage">
                     <h2>Exceptional Benefits</h2>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1700s specimen book.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="mt-4 bg-light py-5">
      <div class="container">
         <h2 class="pt-lg-5 pb-3 text-center sectin-sub-title mb-4">
            Company Perks
         </h2>
         <div class="row">
            <div class="col-lg-6 col-6 ">
               <div
                  class="CompanyPerks-box text-center wow  fadeInLeft  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="far fa-calendar-check"></i>
                  </p>
                  <h3 class="w-100">Flexible Working Hours</h3>
               </div>
            </div>
            <div class="col-lg-6 col-6 ">
               <div
                  class="CompanyPerks-box text-center wow  fadeInRight  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="fas fa-plane" aria-hidden="true"></i>
                  </p>
                  <h3 class="w-100">Exclusive Paid Holidays</h3>
               </div>
            </div>
            <div class="col-lg-6 col-6 py-lg-5">
               <div
                  class="CompanyPerks-box text-center wow  fadeInLeft  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="fas fa-tv"></i>
                  </p>
                  <h3 class="w-100">IPS Connect- Reward Program</h3>
               </div>
            </div>
            <div class="col-lg-6 col-6 py-lg-5">
               <div
                  class="CompanyPerks-box text-center wow  fadeInRight  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="fas fa-globe-asia"></i>
                  </p>
                  <h3 class="w-100">A Healthy Environment</h3>
               </div>
            </div>
            <div class="col-lg-6 col-6 ">
               <div
                  class="CompanyPerks-box text-center wow  fadeInLeft  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="far fa-star"></i>
                  </p>
                  <h3 class="w-100">Competive &amp; On-time Salary</h3>
               </div>
            </div>
            <div class="col-lg-6 col-6 ">
               <div
                  class="CompanyPerks-box text-center wow  fadeInRight  animated"
                  data-wow-delay=".2s"
                  >
                  <p>
                     <i class="fas fa-user-friends"></i>
                  </p>
                  <h3 class="w-100">Team Building Camps &amp; Workshops</h3>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section className="sec-career">
      <div className="container">
         <div className="career-head">
            <h1>Excited To Work With Us...</h1>
            <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard dummy text
               ever since the 1700s specimen book.
            </p>
            <div className="row pt-4">
               <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#java">
                  <div className="hire">
                     <div class="vacancy-box">
                        <h4>Java Developer</h4>
                        <p>Experience : 3+ Years</p>
                        <p class="location">
                           <img class="location-img" src={Location} alt="location" />
                           <img
                              class="location-hover"
                              src={Location}
                              alt="location"
                              />
                           Indore, India
                        </p>
                        <img
                           class="forward-arrow"
                           src={Arrow}
                           alt=""
                           data-backdrop="false"
                           />
                     </div>
                  </div>
               </div>
               <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#mern">
                  <div className="hire">
                     <div class="vacancy-box">
                        <h4>Mern Developer</h4>
                        <p>Experience : 3+ Years</p>
                        <p class="location">
                           <img class="location-img" src={Location} alt="location" />
                           <img
                              class="location-hover"
                              src={Location}
                              alt="location"
                              />
                           Indore, India
                        </p>
                        <img
                           class="forward-arrow"
                           src={Arrow}
                           alt=""
                           data-backdrop="false"
                           />
                     </div>
                  </div>
               </div>
               <div className="col-md-4" data-bs-toggle="modal" data-bs-target="#mean">
                  <div className="hire">
                     <div class="vacancy-box">
                        <h4>Mean Developer</h4>
                        <p>Experience : 3+ Years</p>
                        <p class="location">
                           <img class="location-img" src={Location} alt="location" />
                           <img
                              class="location-hover"
                              src={Location}
                              alt="location"
                              />
                           Indore, India
                        </p>
                        <img
                           class="forward-arrow"
                           src={Arrow}
                           alt=""
                           data-backdrop="false"
                           />
                     </div>
                  </div>
               </div>
          
            </div>
         </div>
      </div>
   </section>
   <div class="modal" id="java" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header align-items-start">
                  <div>
                     <div class="d-flex">
                        <h5 class="modal-title">Java Developer</h5>
                        <span>
                        <img class="location-img" src={Location} alt="location" />
                        Indore, India
                        </span>
                     </div>
                     <p>Experience : 3+ Years</p>
                  </div>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     ></button>
               </div>
               <div class="modal-body">
                  <h3 id="summernote" class="listHeading">Job Description</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Design, develop, troubleshoot and debug software programs
                           with hands-on in Ruby on Rails
                        </li>
                        <li>
                           Contribute at individual level in coding and development
                           of modules, module level integrations, API integrations,
                           supporting integration with customer systems, integration
                           with third party apps platforms
                        </li>
                        <li>Write maintainable scalable efficient code</li>
                     </ul>
                  </ul>
                  <h3 class="listHeading">Required Job Skills</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Atleast 3+ yrs of experience in Ruby on Rails development
                        </li>
                        <li>
                           Should have sound knowledge of html, css: (preferably
                           Bootstrap), javascriptcoffeescript, Jquery, Ajax
                        </li>
                        <li>Should have sound knowledge of database</li>
                        <li>
                           Design, build, and maintain efficient, reusable, and
                           reliable Ruby code
                        </li>
                     </ul>
                  </ul>
               </div>
               <div class="modal-footer">
                  <button type="submit" onClick={() => history.push("/apply", { from: "career" })} class="btn black-btn text-uppercase filled-btn">
                  APPLY NOW <img src={Right} />
                  </button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal" id="mern" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header align-items-start">
                  <div>
                     <div class="d-flex">
                        <h5 class="modal-title">Mern Developer</h5>
                        <span>
                        <img class="location-img" src={Location} alt="location" />
                        Indore, India
                        </span>
                     </div>
                     <p>Experience : 3+ Years</p>
                  </div>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     ></button>
               </div>
               <div class="modal-body">
                  <h3 id="summernote" class="listHeading">Job Description</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Design, develop, troubleshoot and debug software programs
                           with hands-on in Ruby on Rails
                        </li>
                        <li>
                           Contribute at individual level in coding and development
                           of modules, module level integrations, API integrations,
                           supporting integration with customer systems, integration
                           with third party apps platforms
                        </li>
                        <li>Write maintainable scalable efficient code</li>
                     </ul>
                  </ul>
                  <h3 class="listHeading">Required Job Skills</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Atleast 3+ yrs of experience in Ruby on Rails development
                        </li>
                        <li>
                           Should have sound knowledge of html, css: (preferably
                           Bootstrap), javascriptcoffeescript, Jquery, Ajax
                        </li>
                        <li>Should have sound knowledge of database</li>
                        <li>
                           Design, build, and maintain efficient, reusable, and
                           reliable Ruby code
                        </li>
                     </ul>
                  </ul>
               </div>
               <div class="modal-footer">
                  <button type="submit" onClick={() => history.push("/apply", { from: "career" })} class="btn black-btn text-uppercase filled-btn">
                  APPLY NOW <img src={Right} />
                  </button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal" id="mean" tabindex="-1" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="modal-header align-items-start"> 
                  <div>
                     <div class="d-flex">
                        <h5 class="modal-title">Mean Developer</h5>
                        <span>
                        <img class="location-img" src={Location} alt="location" />
                        Indore, India
                        </span>
                     </div>
                     <p>Experience : 3+ Years</p>
                  </div>
                  <button
                     type="button"
                     class="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     ></button>
               </div>
               <div class="modal-body">
                  <h3 id="summernote" class="listHeading">Job Description</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Design, develop, troubleshoot and debug software programs
                           with hands-on in Ruby on Rails
                        </li>
                        <li>
                           Contribute at individual level in coding and development
                           of modules, module level integrations, API integrations,
                           supporting integration with customer systems, integration
                           with third party apps platforms
                        </li>
                        <li>Write maintainable scalable efficient code</li>
                     </ul>
                  </ul>
                  <h3 class="listHeading">Required Job Skills</h3>
                  <ul class="listForJob">
                     <ul>
                        <li>
                           Atleast 3+ yrs of experience in Ruby on Rails development
                        </li>
                        <li>
                           Should have sound knowledge of html, css: (preferably
                           Bootstrap), javascriptcoffeescript, Jquery, Ajax
                        </li>
                        <li>Should have sound knowledge of database</li>
                        <li>
                           Design, build, and maintain efficient, reusable, and
                           reliable Ruby code
                        </li>
                     </ul>
                  </ul>
               </div>
               <div class="modal-footer">
                  <button type="submit" onClick={() => history.push("/apply", { from: "career" })} class="btn black-btn text-uppercase filled-btn">
                  APPLY NOW <img src={Right} />
                  </button>
               </div>
            </div>
         </div>
      </div>
   <Footer />
</div>
);
};
export default Career;

