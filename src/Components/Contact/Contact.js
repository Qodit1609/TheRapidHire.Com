import React from "react";
import "./Contact.css";
import addressMap from "../../assets/images/map.PNG";
import India from "../../assets/images/India-icon.png";
import Usa from "../../assets/images/us-icon.png";
import emailjs from 'emailjs-com'; 

const Contact = () => {
  function sendEmail(e)  {
    e.preventDefault();
    emailjs.sendForm('service_nla3o8q', 'template_k2gyn8q', e.target, 'user_rbaFUyv8MppoyJZo9AxOz')
      .then((result) => {
        console.log('Email successfully sent!',result.text);
      }, (error) => {
          console.log('Email not sent!',error);
      });
      e.target.reset();
  };
  return (
    <div id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-12 form">
            <h2>Let's Talk About Your Idea</h2>
            <form onSubmit={sendEmail}>          
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Tell Us About Project*"
                  name="message"
                ></textarea>
              </div>
              <div className="submitbutton">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-sm-12 address">
            <h2> OUR OFFICE ADDRESS</h2>
            <div className="list">
              <ul className="list-group">
                <li className="list-group-item">
                  <img src={Usa} />
                </li>
                <li className="list-group-item">
                  1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801 USA
                </li>
              </ul>
              <ul className="list-group">
                <li className="list-group-item">
                  <img src={India} />
                </li>
                <li className="list-group-item">
                  ED-3 Scheme no. 97 Ring Road, Near Robot Square,Indore MP
                  (452016)
                </li>
              </ul>
              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fas fa-phone"></i>
                </li>
                <li className="list-group-item">+1 (917) 628 2406</li>
              </ul>
              <ul className="list-group">
                <li className="list-group-item">
                  <i className=" fas fa-envelope-open"></i>
                </li>
                <li className="list-group-item">sales@therapidhire.com</li>
              </ul>
            </div>
            <div className="map">
              <img src={addressMap} alt="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
