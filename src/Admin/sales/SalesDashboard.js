import React from "react";
import "./Sales.css";
const SalesDashboard = () => {
  return (
    <div id="sales">
      <div class="dashboard-header">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <a class="navbar-brand" href="#">
            Welcome to Sales Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto navbar-right-top">
              <li class="nav-item dropdown nav-user">
                <a
                  class="nav-link nav-user-img"
                  href="#"
                  id="navbarDropdownMenuLink2"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="https://img.icons8.com/dusk/100/000000/user-female-circle.png"
                    alt=""
                    class="user-avatar-md rounded-circle"
                  />
                </a>
                <div class="dropdown-menu dropdown-menu-right nav-user-dropdown">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-power-off"></i>Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* <div class="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-6 mt-3 mb-3">
            <h4 className="text-light">Welcome sales Dashboard</h4>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div> */}
      <div className="container table-section">
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Samanath Sungu</td>
                <td>samanth@gmail.com</td>
                <th>How can help you</th>
              </tr>
              <tr>
                <td>2</td>
                <td>Victoria bitter</td>
                <td>victoria234@gmail.com</td>
                <th>Hy</th>
              </tr>
              <tr>
                <td>3</td>
                <td>James faukner</td>
                <td>James@gmail.com</td>
                <th>hii</th>
              </tr>
              <tr>
                <td>4</td>
                <td>Single Mines</td>
                <td>single.mines@gmail.com</td>
                <th>
                  TheRapidHire follows the procedure of defining, designing,
                  testing, and implementing a new software application or
                  program. It includes the internal Development of customized
                  systems, the creation of database systems.TheRapidHire works
                  for the enhancement and productivity of the organization for
                  the satisfaction of its clients.TheRapidHire follows the
                  procedure of defining, designing, testing, and implementing a
                  new software application or program. It includes the internal
                
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
