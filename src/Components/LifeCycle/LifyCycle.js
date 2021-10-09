import React from "react";
import "./LifeCycle.css";
import planning from "../../assets/images/planning.svg";
import development_lifecycle from "../../assets/images/sdlc_image.gif";
const LifeCycle = () => {
  return (
    <div id="lifecycle">
      <div className="container-fluid main_contain">
        <h2>CUSTOM SOFTWARE DEVELOPMENT LIFECYCLE</h2>
        <p>
          We employ best practice processes and development methodologies as a
          foundation for rapid building of cutting-edge technology solutions in
          a structured and methodical way.
        </p>
        <div className="toggeler">
          <div className="row">
            <div className="col-lg-6 col-sm-12 acc_col">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingOne">
                    <h4 className="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Planning
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    className="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div className="panel-body">
                      <p>
                        We collect all the relevant information from the
                        customer to develop custom software development
                        solutions as per their expectation.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Designing
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div className="panel-body">
                      <p>
                        Once the requirement analysis phase is completed, the
                        next step is to define and document software needs.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingThree">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Defining
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div className="panel-body">
                      <p>
                        Once the requirement analysis phase is completed, the
                        next step is to define and document software needs.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFour">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Building
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFour"
                  >
                    <div className="panel-body">
                      <p>
                        Developers start to build the entire system by writing
                        code using the chosen programming language, techniques,
                        and methodologies.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingFive">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Testing
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFive"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingFive"
                  >
                    <div className="panel-body">
                      <p>
                        Evaluating the quality of software with the aim of
                        finding and fixing defects.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingSix">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Deployment
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseSix"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingSix"
                  >
                    <div className="panel-body">
                      <p>
                        The final software is released and checked for
                        deployment issues, if any.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading" role="tab" id="headingSeven">
                    <h4 className="panel-title">
                      <a
                        className="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Mentainense
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseSeven"
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingSeven"
                  >
                    <div className="panel-body">
                      <p>
                        According to the service level agreement, we ensure that
                        needs continue to be met and that the system continues
                        to perform as per the specification mentioned in the
                        first phase.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 development">
              <img src={development_lifecycle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LifeCycle;
