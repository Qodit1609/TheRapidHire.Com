import React from "react";
import "./Team.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team1 from "../../assets/images/narend.jpeg";
import team2 from "../../assets/images/Shraddhha.jpg";
import team3 from "../../assets/images/pp.jpg";
import team4 from "../../assets/images/Nitin.jpg";
import team5 from "../../assets/images/saba.jpeg";
import team6 from "../../assets/images/avinash.jpeg";
import team7 from "../../assets/images/ankita.jpeg";
import team8 from "../../assets/images/krishana.jpeg";

const Team = () => {
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div id="team">
      <div className="container text-center content">
        <h2>INNOVATIVE TEAM</h2>
        <p>
          The way a team plays as a whole determines its success. You may have
          the greatest bunch of individual stars in the world. We can all do
          small things, with great love, and together we can do something
          wonderful.
        </p>
        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team2} alt="" />
              </div>
              <div className="details">
                <h2>
                  Shraddhha Sharma{" "}
                  <span className="job-title">
                    Bussiness Development Execative
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team3} alt="" />
              </div>
              <div className="details">
                <h2>
                  Vikas Choudhary
                  <span className="job-title">Web Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team4} alt="" />
              </div>
              <div className="details">
                <h2>
                  Nitin Vishwakarma
                  <span className="job-title">Web Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team1} alt="" />
              </div>
              <div className="details">
                <h2>
                  Narendra Singh
                  <span className="job-title">Software Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team5} alt="" />
              </div>
              <div className="details">
                <h2>
                  Saba Qureshi<span className="job-title">Java Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team6} alt="" />
              </div>
              <div className="details">
                <h2>
                  Avinash Malakar
                  <span className="job-title">Software Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team7} alt="" />
              </div>
              <div className="details">
                <h2>
                  Ankita Yadav
                  <span className="job-title">Software Developer</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src={team8} alt="" />
              </div>
              <div className="details">
                <h2>
                  Krishana Makwana
                  <span className="job-title">Software Developer</span>
                </h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Team;
