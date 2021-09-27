import React from "react";
import "./Features.css";
import features1 from "../../assets/images/service_icon_1-1.png";
import features2 from "../../assets/images/service_icon_3-1.png";
import features3 from "../../assets/images/service_icon_3-1.png";
import features4 from "../../assets/images/service_icon_4-1.png";

const Features = () => {
  return (
    <div id="features">
      <div className="cotainer-fluid content">
        <h2>OUR FEATURES</h2>
        <p>
          Technology is transforming the way we buy, sell, and do everything. We
          help clients unlock potential and fuel growth with software
          development services. Breaking through blockers not only gives you the
          best chance to win — it has the potential to disrupt your industry’s
          game completely.
        </p>
        <div className="cards">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card card-flip">
                <div className="card-front" style={{ backgroundColor: "skyblue" }}>
                  <div className="card-body">
                    {/* <i className="fa fa-search fa-5x float-right"></i> */}
                    <img className="card-title" src={features1} />
                    <h2 className="card-text" style={{ color: "white" }}>
                      Strategy
                    </h2>
                  </div>
                </div>
                <div className="card-back bg-black">
                  <div className="card-body">
                    <p className="card-text" style={{ color: "wheat" }}>
                      We listen to your ideas carefully, and execute them
                      through provision of our customized web solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-flip h-100">
                <div
                  className="card-front text-white"
                  style={{ backgroundColor: "#20b2aa" }}
                >
                  <div className="card-body">
                    <img className="card-title" src={features2} />
                    <h2 className="card-text" style={{ color: "white" }}>
                      Design
                    </h2>
                  </div>
                </div>
                <div className="card-back bg-dark text-white">
                  <div className="card-body">
                    <p className="card-text" style={{ color: "wheat" }}>
                      We don’t just design, we build you a masterpiece, that
                      brings the brightest colors of your brand to be displayed
                      to your customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-flip h-100">
                <div
                  className="card-front text-white"
                  style={{ backgroundColor: "skyblue" }}
                >
                  <div className="card-body">
                    <img className="card-title" src={features3} />
                    <h2 className="card-text" style={{ color: "white" }}>
                      Develop
                    </h2>
                  </div>
                </div>
                <div className="card-back bg-black">
                  <div className="card-body text-primary">
                    <p className="card-text" style={{ color: "wheat" }}>
                      You dream it, we develop it. Our passion is to bring your
                      creative ideas to life with our innovative solutions and
                      web skilled team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card card-flip h-100">
                <div
                  className="card-front text-white"
                  style={{ backgroundColor: "#20b2aa" }}
                >
                  <div className="card-body">
                    <img className="card-title" src={features4} />
                    <h2 className="card-text" style={{ color: "white" }}>
                      Brand
                    </h2>
                  </div>
                </div>
                <div className="card-back bg-black">
                  <div className="card-body">
                    <p className="card-text" style={{ color: "wheat" }}>
                      Making your identity stand out is our mission. With the
                      blowing marketing hacks, we make sure your brand wins
                      everyone's hearts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
