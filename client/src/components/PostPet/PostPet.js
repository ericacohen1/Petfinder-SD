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
      <input type="text" name="breed" placeholder="Breed" /><br />
      <input type="text" name="age" placeholder="Age" /><br />
      <input type="text" name="bio" placeholder="Bio" /><br />
      <h5>Add a picture of your pet</h5>
      <input type="file" name="myFile" /><br />
     
      <Link to="Home"><button>Submit</button></Link>     
     
    </form>
  </div>
</div>
)

export default PostPet;