import React from 'react';
import "./Header.css";
import logo from '../../assets/images/LOGO new.png';
import { Link } from 'react-router-dom';
import $ from 'jquery'

const Header = () => {
 
return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
      <img src={logo} className="logo"/>
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto flex-nowrap" id="navList">
        <li class="nav-item">
          <Link className="nav-link active" aria-current="page" to="services">SERVICES
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="about">About
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="features">Features
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="Technology">Technology
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="team">Team
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="contact_child">Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Header;
