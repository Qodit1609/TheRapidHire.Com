import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Forgot = () => {
  return (
    <div id="forgot">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-4 col-md-offset-4"></div>
          <div class="col-md-4 col-md-offset-4 pb-5">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
                    <form>
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon">
                            <i class="glyphicon glyphicon-envelope color-blue"></i>
                          </span>
                          <input
                            id="email"
                            name="email"
                            placeholder="email address"
                            class="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                       <Link to="/reset"> <input
                          name="recover-submit"
                          class="btn btn-lg btn-primary btn-block"
                          type="submit"
                          value="Reset Password"
                        /></Link>
                      </div>
                    </form>
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

export default Forgot;
