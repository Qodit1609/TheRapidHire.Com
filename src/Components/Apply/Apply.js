import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Apply.css";
 const Apply = () => {
  return (
    <div id="apply">
      <Header />
      <div className="service-bg cover-background">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              <h1 className="fw-light">Apply Now</h1>
              <p className="lead">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1700s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="apply-sec text-center login-block">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <form class="md-float-material form-material" action="#" method="POST">
                    <div class="auth-box card">
                        <div class="card-block">
                            <div class="row">
                                <div class="col-md-12">
                                    <h3 class="text-center heading">Apply Now</h3>
                                </div>
                            </div>
                            <div class="form-group form-primary">
                               <input type="text" class="form-control" name="first_name" value="" placeholder="Full name" id="first_name"/> 
                            </div>
                            <div class="form-group form-primary">
                               <input type="text" class="form-control" name="email" value="" placeholder="Email" id="email"/> 
                            </div>
                            <div class="form-group form-primary">
                               <input type="text" class="form-control" name="first_name" value="" placeholder="Address" id="first_name"/> 
                            </div>
                            <div class="form-group form-primary">
                               <input type="number" class="form-control" name="email" value="" placeholder="Mobile Number" id="email"/> 
                            </div>
                            <div class="mb-3">
                              <input class="form-control" type="file" id="formFile"/>
                            </div>
                            <div class="form-group form-primary">
                              <button type="submit">Submit</button>
                            </div>  
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
      <Footer />
    </div>
  );
};

export default Apply;

