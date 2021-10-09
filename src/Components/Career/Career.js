import React,  {useEffect}  from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useHistory, Link } from "react-router-dom";
import "./Career.css";
import Fun from "../../assets/images/fun.jpg";
import Mentorship from "../../assets/images/Mentorship.jpg";
import Benefits from "../../assets/images/Benefits.jpg";
import Arrow from "../../assets/images/right-arrow.png";
import Location from "../../assets/images/placeholder.png";
import Right from "../../assets/images/right.png";
import $ from "jquery";


const Career = () => {
  
  const redirect = () => {
    window.location.href = '/apply'
 }
  
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
              <div
                className="col-md-4"
                data-bs-toggle="modal"
                data-bs-target="#java"
              >
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
              <div
                className="col-md-4"
                data-bs-toggle="modal"
                data-bs-target="#mern"
              >
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
              <div
                className="col-md-4"
                data-bs-toggle="modal"
                data-bs-target="#mean"
              >
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
              <h3 id="summernote" class="listHeading">
                Job Description
              </h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    Experience in core Java advanced programming. Experience in
                    Spring & Hibernate is mandatory. Experience in building
                    mechanisms like Maven. Good knowledge on design patterns and
                    anti-patterns. Good in algorithms and data structures.
                    <li>
                      {" "}
                      Good understanding of Database concepts and Experience in
                      SQL, PLSQL and NoSQL. Excellent Analytical and program
                      solving skills Excellent written and oral communication
                      skills self-starter and highly motivated Work in a dynamic
                      environment and ability to adapt quickly to changes
                      Experience with Test and defect management tools. An
                      innovator, always suggesting newer ways of improving
                      Productivity. Mentor and train team members. Identify and
                      escalate Risks on time and suggest mitigation measures.
                    </li>
                  </li>
                </ul>
              </ul>
              <h3 class="listHeading">Required Job Skills</h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    Experience: 2-3+ years Salary: No bar for deserving
                    candidates Location: Indore (work for office)
                  </li>
                  <li>
                    Excellent written and oral communication skills Self-starter
                    and highly motivated
                    <li>
                      {" "}
                      Work in a dynamic environment and ability to adapt quickly
                      with changes Ability to constantly innovate and think out
                      of the box Good to have: Experience in the BFSI domain is
                      an advantage.
                    </li>{" "}
                    Experience in AWS Cloud Experience in Node js/Vue js/Angular
                    js. Knowledge on other J2ee frameworks • Hands-on experience
                    using any Continuous Integration tools like Jenkins. • Hands
                    on knowledge of JUNIT and code coverage, White-box testing •
                    Exposure to CI/CD
                    <li>
                      Industry certification on technologies with expertise, or
                      willingness to obtain certification. Experience with
                      Firebase is plus; Strong knowledge of Object Oriented
                      programming and design.
                    </li>
                    patterns.
                  </li>
                </ul>
              </ul>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                onClick={redirect}
                class="btn black-btn text-uppercase filled-btn"
              >
                APPLY NOW 
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
              <h3 id="summernote" class="listHeading">
                Job Description
              </h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    We are looking for a MERN Stack Developer to produce
                    scalable software solutions. You’ll be part of a
                    cross-functional team that’s responsible for the full
                    software development life cycle, from conception to
                    deployment.
                  </li>
                  <li>
                    As a Full Stack Developer, you should be comfortable around
                    both front-end and back-end coding languages, development
                    frameworks and third-party libraries. You should also be a
                    team player with a knack for visual design and utility. If
                    you’re also familiar with Agile methodologies, we’d like to
                    meet you.
                  </li>
                  <li>Write maintainable scalable efficient code</li>
                </ul>
              </ul>
              <h3 class="listHeading">Required Job Skills</h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    Experience: 3+ years Salary: No bar for deserving candidate
                    Location: Indore (Work for office)
                  </li>
                  <li>
                    Engineering degree in Computer Science related fields, or
                    M.C.A. or B.Tech; Experience with Express.js;
                    <li>
                      {" "}
                      Experience with react.js; Passion for best design and
                      coding practices and a desire to develop new bold ideas;
                    </li>{" "}
                    Experience with Node.js; Experience with MongoDB; Experience
                    with other stacks such as PHP is plus, but not mandatory;{" "}
                    <li>
                      Industry certification on technologies with expertise, or
                      willingness to obtain certification. Experience with
                      Firebase is plus; Strong knowledge of Object Oriented
                      programming and design.
                    </li>
                    patterns.
                  </li>
                </ul>
              </ul>
            </div>
            <div class="modal-footer">
             <button
                type="submit"
                onClick={redirect}
                class="btn black-btn text-uppercase filled-btn"
              >
                APPLY NOW 
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
              <h3 id="summernote" class="listHeading">
                Job Description
              </h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    Our company is looking for a Mean Stack Developer to join
                    our team.
                  </li>
                  <li>
                    Proven interpersonal skills while contributing to team
                    effort by accomplishing related results as needed; Scope and
                    deliver solutions with the ability to design solutions
                    independently based on high-level architecture;
                  </li>
                  <li>
                    Independent thinking, Desire / Ability to work in a
                    fast-paced environment with creativity and brainstorming;
                    Work on the new features that our Push Notification tool
                    demands;
                  </li>
                </ul>
              </ul>
              <h3 class="listHeading">Required Job Skills</h3>
              <ul class="listForJob">
                <ul>
                  <li>
                    Experience: 3+ years Salary: No bar for deserving candidates
                    Location: Indore (Work for office)
                  </li>
                  <li>
                    Expertise in developing applications with Angular
                    (specifically Angular 6) and using Bootstrap for responsive
                    web design; Manage the mean-stack for an existing SaaS
                    software;
                  </li>
                  <li>
                    Expert in MongoDB and familiarity with RDBMS databases
                    (mySQL, etc.); Previous experience building full-stack web
                    applications with NodeJS / Express and integrating third
                    party APIs (Google, Facebook, Twilio, etc.); Work with
                    senior executives on everything from bug fixes to new
                    feature deployment;
                  </li>
                  <li>
                    Ability to work independently or with a group; Strong
                    problem- solving, written, and verbal communication skills;
                    Experience writing node.js + Express/Sails + PostgreSQL (or
                    mySQL) code in production;
                  </li>
                </ul>
              </ul>
            </div>
            <div class="modal-footer">
             <button
                type="submit"
                onClick={redirect}
                class="btn black-btn text-uppercase filled-btn"
              >
                APPLY NOW 
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
