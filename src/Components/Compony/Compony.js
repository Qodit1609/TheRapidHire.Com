import React from "react";
import "./Compony.css";
import Singma1 from "../../assets/images/crestcoder.png"
import Singma2 from "../../assets/images/hiveku.png";
import Singma3 from "../../assets/images/asianpaints.png";
import Singma4 from "../../assets/images/sigma_data_system.png"

const Compony = () => {
  return (
    <div id="compony">
      <div className="cotainer-fluid content">
        <h2>Trusted By The World's Best Companies</h2>
        <p>
          One of the fundamental principles in developing meaningful
          relationships is trust. Impactful companies rely on radical
          transparency, strong connection and the ability to trust their team to
          get the job done.
        </p>
        <div className="row compony_row">
          <div className="col-lg-3 col-sm-6">
            <div className="componies">
            <img src={Singma2} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="componies">
            <img src={Singma3} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="componies">
              <img src={Singma1} className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="componies">
            <img src={Singma4} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compony;
