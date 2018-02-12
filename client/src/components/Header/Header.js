import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = props => (
    
        
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/Home">PetFinder SD</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/Home">Home</a></li>
              <Link to="LogIntoAccount">Log In</Link>  
              <li><a href="/CreateAccount">Create Account</a></li>
            </ul>
          </div>
        </nav>
)

export default Header;