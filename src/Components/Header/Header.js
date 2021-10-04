import React from 'react';
import "./Header.css";
import logo from '../../assets/images/LOGO new.png';
import { Link, NavLink } from 'react-router-dom';

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
    <ul class="navbar-nav ms-auto flex-nowrap " id="navList">
        <li class="nav-item">
          <NavLink exact activeClassName="active" to="services">SERVICES
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="about">About
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="features">Features
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="technology">Technology
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="team">Team
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="career">Careers
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink  exact activeClassName="active" to="contact_child">Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Header;
