import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import "./Career.css";
import Fun from "../../assets/images/fun.jpg";
import Mentorship from "../../assets/images/Mentorship.jpg";
import Benefits from "../../assets/images/Benefits.jpg";
import Arrow from "../../assets/images/right-arrow.png";
import Location from "../../assets/images/placeholder.png";

const Career = () => {
  const [data, setData] = useState("");
  const [value, setValue] = useState([]);
  const apiUrl = "https://therapidhiredev.herokuapp.com";
  console.log("Show the api url here===>>", apiUrl);

  useEffect(() => {
    axios.get(`${apiUrl}/banner/`).then((resp) => {
      setValue(resp.data);
    });
    window.scrollTo(0, 0);
  }, []);
  console.log("Show the data here===>>>>>>>>>>>>", value);

  useEffect(() => {
    axios
      .get("https://therapidhiredev.herokuapp.com/CareerOurValue")
      .then((res) => {
        setData(res.data);
      });
    window.scrollTo(0, 0);
  }, []);
  console.log("second", data);

  //   const redirect = () => {
  //     window.location.href = '/apply'
  //  }

  return (
    <div id="career">
      <Header />
      {value &&
        value.slice(5, 6).map((data1, index) => (
          <div className="service-bg cover-background">
            <div className="container h-100">
              <div className="row h-100 align-items-center" key={index}>
                <div className="col-12 text-center" data-aos="zoom-in">
                  <h1 className="fw-light"> {data1.title}</h1>
                  <p className="lead">{data1.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      {data &&
        data.slice(0, 1).map((value, index) => (
          <section className="sec-career">
            <div className="container" key={index == 2}>
              <div className="career-head">
                <h1>{value.mainTitle}</h1>
                <p>{value.description}</p>
              </div>

              <div class="row">
                {data &&
                  data.slice(0, 3).map((data3, index) => (
                    <div
                      class="col-md-4 text-center aos-init aos-animate"
                      data-aos="fade-right"
                      data-aos-delay="100"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <img
                            class="img-fluid"
                            src={data3.image}
                            alt="Career"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 careerPage">
                          <h2>{data3.title}</h2>
                          <p>{data3.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}
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
              <div className="col-md-4">
                <Link to="/apply">
                  <div className="hire">
                    <div class="vacancy-box">
                      <h4>Java Developer</h4>
                      <p>Experience : 3+ Years</p>
                      <p class="location">
                        <img
                          class="location-img"
                          src={Location}
                          alt="location"
                        />
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
                </Link>
              </div>
              <div className="col-md-4" data-bs-toggle="modal">
                <Link to="/apply">
                  <div className="hire">
                    <div class="vacancy-box">
                      <h4>Mern Developer</h4>
                      <p>Experience : 3+ Years</p>
                      <p class="location">
                        <img
                          class="location-img"
                          src={Location}
                          alt="location"
                        />
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
                </Link>
              </div>
              <div className="col-md-4" data-bs-toggle="modal">
                <Link to="/apply">
                  <div className="hire">
                    <div class="vacancy-box">
                      <h4>Mean Developer</h4>
                      <p>Experience : 3+ Years</p>
                      <p class="location">
                        <img
                          class="location-img"
                          src={Location}
                          alt="location"
                        />
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Career;
