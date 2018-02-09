import React from "react";
import "./Header.css";

const Header = props => (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">PetFinder SD</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </nav>
)

export default Header;