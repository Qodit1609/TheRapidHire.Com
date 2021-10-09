import React from "react";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Story.css";
import MernIcon from "../../assets/images/mern-icon.png";
import WebDesignIcon from "../../assets/images/computer.png";
import WebDevelopIcon from "../../assets/images/web-develop-icon.png";
import ItDatabase from "../../assets/images/it&database.png";
import AWS from "../../assets/images/aws_icon.png";
import AppDevelopmentIcon from "../../assets/images/app_development_icon.png";
import CloudIcon from "../../assets/images/cloud_icon.png";
import DatabaseMangeIcon from "../../assets/images/DatabaseMange.png";
import CyberIcon from "../../assets/images/cyber_icon.png";
import JavaIcon from "../../assets/images/java_icon.png";
import PhpIcon from "../../assets/images/php-icon.png";
import MachineLearning from "../../assets/images/machine-learning.png";
import MeanIcons from "../../assets/images/mean-icon.png";
import AIIcon from "../../assets/images/AI_icon.png";
import ShopifyIcon from "../../assets/images/shopify-icon.png";
import CloudComputing from "../../assets/images/cloud-computing-icon.png";
import IotIcon from "../../assets/images/iot-icon.png";
import WordpressIcon from "../../assets/images/wordpress-icon.png";
import SalesforceIcon from "../../assets/images/salesforce-icon.png";

const Story = () => {
  //  const  myFunction=()=> {
  //     var dots = document.getElementById("dots");
  //     var moreText = document.getElementById("more");
  //     var btnText = document.getElementById("myBtn");

  //     if (dots.style.display === "none") {
  //       dots.style.display = "inline";
  //       btnText.innerHTML = "Read more";
  //       moreText.style.display = "none";
  //     } else {
  //       dots.style.display = "none";
  //       btnText.innerHTML = "Read less";
  //       moreText.style.display = "inline";
  //     }
  //   }
  // our service//
  const WEB_DESIGN =
    "  Want to build your product with a team thatestablishes a clear design process, meets deadlines,and delivers a spot-on end result? Turn toIntellectsoft’s UI and UX services UI and UX services.";

  const WEB_DEVELOPMENT =
    "   We provide designing, coding, programming and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design.";

  const IT_DATABASE =
    " Atlas Systems provides you with comprehensive Database Support services that take care of all your database support requirements. Our team of experts will work with you to recommend and perform task .";

  const AWS_SERVICES =
    "  Build, Deploy, and Manage Websites, Apps or Processes On AWS Secure, Reliable Network. Sign Up for a Free Account & Experience AWS Secure.";

  const longText4 =
    "  We believe in developing applications that advance our clients digital strategies. We work with clients to build highly-customized applications and to shift their development practices.";
  const longText7 =
    "  Our cloud services provide the options of availing remote services via cloud computing servers. Services included are computing resources, data resources and communication resources. Furthermore, IaaS, PaaS and SaaS platforms are also available for services.";

  const longText6 =
    "   In today’s business landscape, every CXO is in theprocess or planning on implementing CASS– Cloud,Analytics, Social and Security.Cloud, Analytics, Social and Security..";
  //end service//
  //start technoloy//
  const JAVA =
    "Java is among the most popular object-oriented programming language in the World. Java is Platform Independent and can be used to build High Performance, Robust, Secure and Multithreaded Enterprise Solutions.";
  const PHP =
    "PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.";
  const MACHINE_LEARNING =
    "Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning on the development.";
  const MERN_STACK =
    "MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies MongoDB, Express, React and Node.js.It is designed.";
  const MEAN_STACK =
    "MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies MongoDB, Express, React and Node.js.It is designed.";
  const ARTIFICIAL_INTELLIGENCE =
    "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. Also, businesses are useing it ";
  const IOT =
    "The Internet of Things (IoT) refers to a system of interrelated, internet-connected objects that are able to collect and transfer data over a wireless network without human intervention.";
  const WORDPRESS =
    "WordPress is a free content management system used to build and maintain websites. Its ease of use and unique features have helped it become the most popular blogging tool on the web.";
  const SHOPIFY =
    "Shopify is a commerce platform that allows anyone to set up a free online store and sell their products. Merchants can also sell their products in person with Shopify POS";
  const CLOUD_COMPUTING =
    "Cloud computing is the delivery of different services through the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software.";
  const SALESFORCE =
    "Salesforce.com, inc. is an American cloud-based software company headquartered in San Francisco, California. It provides customer relationship management service.";

  //end technology//
  return (
    <div className="story">
      <div className="container-fluid">
        <div className="content">
          <h2>Story About Us</h2>
          {/* <p>Create your app page with expert developer</p> */}
          <p className="content_title">
            TheRapidHire Pvt Ltd is a growing software development & IT
            outsourcing company based in India. We are a government certified &
            acclaimed IT company. Established in 2019, with a mission to deliver
            quality services at reasonable cost. TRH takes an agile,
            collaborative approach to create customized solutions across the
            digital value chain. Our deep expertise in infrastructure and
            applications management turns Your Ideas into reality.
          </p>
        </div>

        <div className="tabular">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Technology
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={WebDesignIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Web Design</h3>
                        <div className="dummy">
                          <p className="description">
                            <ReactReadMoreReadLess
                              charLimit={70}
                              readMoreText={"Read more "}
                              readLessText={"Read less "}
                              readMoreClassName="read-more-less--more"
                              readLessClassName="read-more-less--less"
                            >
                              {WEB_DESIGN}
                            </ReactReadMoreReadLess>
                          </p>
                          {/* <button onClick={myFunction} id="myBtn">Read more</button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={WebDevelopIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Web Development</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {WEB_DEVELOPMENT}
                          </ReactReadMoreReadLess>
                        </p>
                        {/* <button onClick={myFunction} id="myBtn">Read more</button> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={ItDatabase} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">IT & Database</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {IT_DATABASE}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={AWS} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">AWS Services</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {AWS_SERVICES}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={AppDevelopmentIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">App Development</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {longText4}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={CloudIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Cloud Services</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {longText7}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox ">
                      <div className="service-icon">
                        <img src={DatabaseMangeIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Database Management</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {longText6}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={CyberIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Cyber Security</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {longText6}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container">
                <div className="row">
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={JavaIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Java</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {JAVA}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={PhpIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">PHP</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {PHP}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={MachineLearning} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">MACHINE LEARNING</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {MACHINE_LEARNING}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={MernIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">MERN STACK</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {MERN_STACK}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox">
                      <div className="service-icon">
                        <img src={MeanIcons} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">MEAN STACK</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {MEAN_STACK}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={AIIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Artificial intelligence</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {ARTIFICIAL_INTELLIGENCE}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox ">
                      <div className="service-icon">
                        <img src={IotIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">IoT</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {IOT}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={WordpressIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">Wordpress</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {WORDPRESS}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox ">
                      <div className="service-icon">
                        <img src={ShopifyIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">SHOPIFY</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {SHOPIFY}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox red">
                      <div className="service-icon">
                        <img src={CloudComputing} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">CLOUD COMPUTING</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={70}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {CLOUD_COMPUTING}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6"
                    style={{ marginTop: "1rem" }}
                  >
                    <div className="serviceBox ">
                      <div className="service-icon">
                        <img src={SalesforceIcon} />
                      </div>
                      <div className="service-content">
                        <h3 className="title">SALESFORCE</h3>
                        <p className="description">
                          <ReactReadMoreReadLess
                            charLimit={50}
                            readMoreText={"Read more "}
                            readLessText={"Read less "}
                            readMoreClassName="read-more-less--more"
                            readLessClassName="read-more-less--less"
                          >
                            {SALESFORCE}
                          </ReactReadMoreReadLess>
                        </p>
                      </div>
                    </div>
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
export default Story;
