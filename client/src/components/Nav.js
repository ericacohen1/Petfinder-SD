import React from "react";

const Nav = props =>
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Home")}>
      <a>Home</a>
    </li>
    <li onClick={() => props.handlePageChange("FindPet")}>
      <a>Find Your Pet</a>
    </li>
    <li onClick={() => props.handlePageChange("CreateAccount")}>
      <a>Create Account</a>
    </li>
    <li onClick={() => props.handlePageChange("About")}>
      <a>About</a>
    </li>
    <li onClick={() => props.handlePageChange("SuccessStories")}>
      <a>Success Stories</a>
    </li>
  </ul>;

export default Nav;