import React from "react";
import "./PostPet.css";
import { Link } from "react-router-dom";

const PostPet = props => (
    <div>
    <div className="account-container">
    <h2>Post Your Pet</h2>
    <h4>Please give us your pet info</h4>
    <form onSubmit="submit">
      
      <input type="text" name="pet-name" placeholder="Pet Name" /><br />
      <input type="email" name="email" placeholder="Email" /><br />
      <input type="text" name="password" placeholder="Password" /><br />
      <input type="text" name="zipcode" placeholder="Zipcode" /><br />
     
      <Link to="Home"><button>Submit</button></Link>     
     
    </form>
  </div>
</div>
)

export default PostPet;