import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => (
    
        
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/Home">PetFinder SD</a>
            </div>
            <ul className="nav navbar-nav" id="headerButtons" alt="navbar">
              
              <Link to="Home" class="headerLinks">Home</Link>
              
              <Link to="LogIntoAccount" class="headerLinks">Log In</Link> 
              
              <Link to="About" class="headerLinks">About</Link> 

              <Link to="Profile" class="headerLinks">Profile</Link> 
              
            </ul>
          </div>
        </nav>
)

export default Header;