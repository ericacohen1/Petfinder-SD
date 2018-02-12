import React from "react";
import { Link } from "react-router-dom";

const Nav = props =>
  <ul className="nav nav-tabs">
    <Link to="FindPet">Find A Pet</Link>
    <Link to="PostPet">Post a Pet</Link>
    <Link to="SuccessStories">Success Stories</Link>

  </ul>;

export default Nav;