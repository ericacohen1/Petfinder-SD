import React from "react";
import "./Header.css";

const Header = props => (
    
        
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/Home">PetFinder SD</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/Home">Home</a></li>
              <li><a href="/LogIntoAccount">Log In</a></li>
              <li><a href="/CreateAccount">Create Account</a></li>
            </ul>
          </div>
        </nav>
)

export default Header;