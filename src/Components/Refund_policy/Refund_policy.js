import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Refund_policy.css";
const Refund_policy = () => {
  return (
    <div id="policy">
      <Header />

      <div class="container">
        <div class="terms3">
          <div class="col-xs-12">
            <h2>Refund Policy</h2>
            <br />
            <p>
              In certain cases and within certain limits, some amount may be
              refunded if the permitted work will not be completed as per the
              NDA made with an individual.
            </p>
            <p>
              If the work has not started, a 30% processing fee will be retained
              by the company. City, State Surcharge, and Plan Review fees are
              deducted separately.
            </p>
            <p>
              If the authorized work has been started, the department may retain
              an appropriate portion of the work fee in addition to the
              processing fee.
            </p>
            <p>
              A full refund will be made if the department is in error, but if
              the bank charges some amount from our end then that amount will be
              deducted accordingly.
            </p>
            <p>
              Submit written explanation of refund request within 15 calendar
              days of payment of the amount. Request refunds by mail to
              hr@therapidhire.com.
            </p>
            <p>
              Refunds are paid by digital transfer only. It takes 4 to 6 weeks
              for a refund to be initiated.
            </p>
            <p>
              Banking charges (if any) will be deducted from the amount without
              intimation to parties.
            </p>
            <p>
              If 2 or more channels are included in the payment method then a
              refund will initiate accordingly.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Refund_policy;
