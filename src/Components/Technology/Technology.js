import React from "react";
import "./Technology.css";
import planning from "../../assets/images/language.png";
import planning2 from "../../assets/images/FRAMEWORKS.png";
import planning3 from "../../assets/images/MOBILE.png";
import planning4 from "../../assets/images/WEB5.png";
import planning5 from "../../assets/images/DATABASE_MANAGEMENT.png";
import planning6 from "../../assets/images/CLOUD5.png";
const Technology = () => {
return (
<div id="technology">
  <div className="cotainer-fluid content">
    <h2>QUICK SOFTWARE OVERVIEW
    </h2>
    <p>
      A designer knows he has achieved perfection not when there is nothing
      left to add, but when there is nothing left to take away.” By using
      the best tools and technique we always try to give the best results...
      game completely.
    </p>
    <div className="contents">
      <div className="row ">
        <div className="col-lg-6 col-sm-12 first_tech">
          <div className="content1 cont1 ">
            <img src={planning} class="img-fluid" width="40px" height="50px" alt="img"/>
            <h3>Language
            </h3>
          </div>
          <div className="lang">
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Java
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">C#
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">C/C++
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Python
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">PHP
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Java Script
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Type Script
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 first_tech">
          <div className="content1 cont1 ">
            <img src={planning2} class="img-fluid" width="40px" height="50px" alt="img"/>
            <h3>FRAMEWORKS
            </h3>
          </div>
          <div className="lang">
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Spring
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">React js
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">DJango
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Express
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Node js
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Angular
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">React Native
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">.Net
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 second_tech">
          <div className="content1 cont1 ">
            <img src={planning3} class="img-fluid" width="40px" height="50px" alt="img"/>
            <h3>MOBILE
            </h3>
          </div>
          <div className="lang">
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">iOS
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">React js
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Android
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">HTML5
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Bootstrap
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">JavaScript
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">React Native
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 second_tech1 ">
          <div className="content1 cont1 " >
            <img src={planning4} class="img-fluid" width="40px" height="50px" alt="img"/>
            <h3>WEB
            </h3>
          </div>
          <div className="lang">
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Spring
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">React js
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Angular
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Express
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Node js
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">.Net
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Python
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 second_tech1 ">
          <div className="content1 cont1 ">
            <img src={planning5} class="img-fluid" alt="img"/>
            <h3>DATABASE MANAGEMENT
            </h3>
          </div>
          <div className="lang">
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">NoSQL
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">MySQL
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Oracle SQL
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">PostgreSQL
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Microsoft SQL
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">MongoDb
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Firebase
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 second_tech1 ">
          <div className="content1 cont1 ">
            <img src={planning6} class="img-fluid" width="40px" height="50px" alt="img"/>
            <h3>CLOUD
            </h3>
          </div>
          <div className="lang" >
            <ul class="list" style={{textDecoration: "none"}}>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Amazon Web Services (AWS
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Google Cloud
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Oracle Cloud
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Microsoft Azure
                </a>
              </li>
              <li style={{display: "inline-block", paddingLeft: "20px"}}>
                <a href="#">Socket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
};
export default Technology;
