import React from "react";
import "./Hr.css";
const HR_Dashboard = () => {
  const dash_obj = [
    {
      id: 1,
      name: "Samanath Sungu",
      Email: "samanth@gmail.com",
      Mobile_number: "988788994",
      Technology: "react",
      Description: "hy",
      Upload: "file.png",
    },
    {
      id: 2,
      name: "Victoria bitter",
      Email: "samanth@gmail.com",
      Phone: "988788994",
    },
    {
      id: 3,
      name: "Samanath Sungu",
      Email: "samanth@gmail.com",
      Phone: "988788994",
    },
    {
      id: 4,
      name: "Samanath Sungu",
      Email: "samanth@gmail.com",
      Phone: "988788994",
    },
  ];

  return (
    <div id="hr">
      <div class="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-6 mt-3 mb-3">
            <h4 className="text-light">HR Dashboard</h4>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
      <div className="container pt-5">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Technology</th>
              <th>Description</th>
              <th>Upload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Samanath Sungu</td>
              <td>samanth@gmail.com</td>
              <td>988788994</td>
              <td>React</td>
              <td>hy</td>
              <td>file.png</td>
             
            </tr>
            <tr>
              <td>2</td>
              <td>Victoria bitter</td>
              <td>victoria234@gmail.com</td>
              <td>0900990000</td>
              <td>React</td>
              <td>hy</td>
              <td>file.png</td>
            </tr>
            <tr>
              <td>3</td>
              <td>James faukner</td>
              <td>James@gmail.com</td>
              <td>2342342444</td>
              <td>React</td>
              <td>hy</td>
              <td>file.png</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Single Mines</td>
              <td>single.mines@gmail.com</td>
              <td>989843928</td>
              <td>React</td>
              <td>hy</td>
              <td>file.png</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default HR_Dashboard;
