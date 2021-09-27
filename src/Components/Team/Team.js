import React from "react";
import "./Team.css";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/team.jpg";
import team1 from "../../assets/images/narend.jpeg";
import team2 from "../../assets/images/Shraddhha.jpg";
import team3 from "../../assets/images/pp.jpg";
import team4 from "../../assets/images/Nitin.jpg";
import team5 from "../../assets/images/saba.jpeg";
import team6 from "../../assets/images/avinash.jpeg";
import team7 from "../../assets/images/ankita.jpeg";
import team8 from "../../assets/images/krishana.jpeg";

const Team = () => {
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
        <div className="row">
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team2} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Shraddhha Sharma</h3>
                <span className="post">Bussiness Development Execative</span>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team3} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Vikas Choudhary</h3>
                <span className="post">Web Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team4} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Nitin Vishwakarma</h3>
                <span className="post">Web Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team1} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Narendra Singh</h3>
                <span className="post">Software Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team5} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Saba Qureshi</h3>
                <span className="post">Java developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team6} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Avinash Malakar</h3>
                <span className="post">Software Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team7} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Ankita Yadav</h3>
                <span className="post">Software Developer</span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 our_team">
            <div className="our-team">
              <div className="pic">
                <img src={team8} alt="" />
              </div>
              <div className="team-content">
                <h3 className="title">Krishana Makwana</h3>
                <span className="post">Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
