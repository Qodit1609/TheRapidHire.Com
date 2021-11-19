import React from "react";
import "./AdminMain.css";
import $ from "jquery";
import { useHistory, Link } from "react-router-dom";

const AdminMain = () => {
  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });
  });
  const { location } = window;
    let history = useHistory();
  const handleMenuClose = () => {
    history.push("/login");
    location.reload();
  };
  return (
    <div id="admin">
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>The Rapid Hire</h3>
            <strong>TRH</strong>
          </div>

          <ul class="list-unstyled components">
            {/* <li class="active">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fas fa-home"></i>
                Home
              </a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul>
            </li> */}
            {/* <li class="active">
              <a href="#">
                <i class="fas fa-briefcase"></i>
              </a>
              <a
                href="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                class="dropdown-toggle"
              >
                <i class="fas fa-copy"></i>
                Pages
              </a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <a href="#">Page 1</a>
                </li>
                <li>
                  <a href="#">Page 2</a>
                </li>
                <li>
                  <a href="#">Page 3</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="#">
                <i class="fas fa-image"></i>
                Navbar
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question"></i>
                Slider
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-paper-plane"></i>
                Story
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question"></i>
                Software
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-paper-plane"></i>
                Overview
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question"></i>
                Features
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-paper-plane"></i>
                Trusted
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-question"></i>
                Team
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-paper-plane"></i>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
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
                    <div class="dropdown-menu dropdown-menu-right nav-user-dropdown mt-2">
                      <Link class="dropdown-item" onClick={handleMenuClose}>
                        <i class="fas fa-power-off"></i>Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
