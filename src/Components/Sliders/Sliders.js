import React from "react";
import "./Sliders.css";
import slider1 from "../../assets/images/sli3.jpg";
import slider2 from "../../assets/images/sli7.jpg";
import mobileappdevelopment from "../../assets/images/sli6.jpg";
const Sliders = () => {
  return (
    <div className="sliders">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 sliderImg" alt="slider1" />
            <div className="carousel-caption d-none d-md-block">
              <h2>WEBSITE DEVELOPMENT</h2>
              <p>
                We provide designing, coding, programming and modifying
                websites, from layout to function and according to a client's
                specifications..
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 sliderImg" alt="slider2" />
            <div className="carousel-caption d-none d-md-block">
              <h1>DEDICATED DEVELOPMENT TEAMS</h1>
              <p>
                TheRapidHire furnishes a complete answer for you with inventive
                methodology We let you stay ahead in this computerized promoting
                world.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={mobileappdevelopment}
              className="d-block w-100 sliderImg"
              alt="slider3"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>MOBILE APP DEVELOPMENT</h1>
              <p>
                We believe in developing applications that advance our clients
                digital strategies. We work with clients to build
                highly-customized applications.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Sliders;
