import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => (


  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">PetFinder SD</a>
      </div>
      <ul className="nav navbar-nav" id="headerButtons" alt="navbar">

        <Link to="Home" className="headerLinks">Home</Link>

        <Link to="About" className="headerLinks">About</Link>

        {/* <Link to="Profile" class="headerLinks">Profile</Link>  */}

      </ul>

      <ul className="nav navbar-nav navbar-right" id="headerButtons" alt="navbar">

        {/* {(props.isAuthenticated) ? <Link to="Profile" className="headerLinks" >Hello, {props.name}</Link> : <h3>Welcome!</h3>} */}

        {(props.isAuthenticated) ? <Link to="Home" className="headerLinks" onClick={() => props.handleLogout()}>Log Out</Link> : <Link to="LogIntoAccount" className="headerLinks">Log In</Link>}

      </ul>

    </div>
  </nav>
)

export default Header;