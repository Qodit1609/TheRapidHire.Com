import React from "react";
import "./Contact.css";
import addressMap from "../../assets/images/map.PNG";
import India from "../../assets/images/India-icon.png";
import Usa from "../../assets/images/us-icon.png";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nla3o8q",
        "template_k2gyn8q",
        e.target,
        "user_rbaFUyv8MppoyJZo9AxOz"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
        },
        (error) => {
          console.log("Email not sent!", error);
        }
      );
    e.target.reset();
  }
  return (
    <div id="contact">
      <div className="container">
        <div class="nio-eig-contact-content position-relative">
          <div class="row">
            <div
              class="col-lg-6 wow fadeInLeft animated"
              data-wow-delay="00ms"
              data-wow-duration="1000ms"
            >
              <div class="nio-eig-contact-form-wrap headline">
                <h3>Contact Us Today and Get a Free Consultation!</h3>
                <div class="nio-eig-contact-area">
                  <form onSubmit={sendEmail}>
                    <div class="nio-eig-contact-input d-flex">
                      <input type="text" name="name" placeholder="Your name*" />
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <textarea name="mesage" placeholder="message"></textarea>
                    <div className="submitbutton">
                      <button type="submit" class="btn btn-primary">
                        Get a Quote <i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                  <div class="contact-bottom-cta"></div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1000ms"
            >
              <div class="nio-eig-contact-img position-relative">
                <div class="nio-eig-contact-img-wrap">
                  <img src={addressMap} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
