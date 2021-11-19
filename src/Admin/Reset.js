import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

export default function Reset() {
  return (
    <div id="reset">
      <div class="container pt-5">
        <div class="row">
          <div class="col-md-4 col-md-offset-4"></div>
          <div class="col-md-4 col-md-offset-4 pb-5">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h2 class="text-center pb-3">Change Password</h2>
                  <div class="panel-body">
                    <form>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            id="name"
                            name="name"
                            placeholder="Password"
                            class="form-control"
                            type="name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            id="name"
                            name="name"
                            placeholder="Confim Password"
                            class="form-control"
                            type="name"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input
                          name="recover-submit"
                          class="btn btn-lg btn-primary btn-block"
                          type="submit"
                          value="Submit"
                        />
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
}
