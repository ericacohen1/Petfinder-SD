import React from "react";
import "./PostPet.css";
// import { Link } from "react-router-dom";

const PostPet = props => (
    <div>
    <div className="account-container">
    <h2>Post Your Pet</h2>
    <h4>Please give us your pet info</h4>
    <form>
      
      

      <input type="text" name="name" placeholder="Pet Name" onChange={props.handlePetNameChange} /><br />

      <input type="text" name="breed" placeholder="Breed" onChange={props.handleBreedChange} /><br />

      <input type="text" name="age" placeholder="Age" onChange={props.handleAgeChange} /><br />

      <input type="text" name="contactInfo" placeholder="Enter Contact Info" onChange={props.handleContactInfoChange} /><br />

      <input type="text" name="description" placeholder="Bio" onChange={props.handleBioChange} /><br />
      <h5>Add a picture of your pet</h5>
      <input type="text" className="form-control" name="image"  onChange={props.handleImageChange} /><br />
                      
                           
                           
                           
                           
     
      <button onClick={props.handleFormSubmitNewPet("accountData")}>Submit</button>
   
     
    </form>
  </div>
</div>
)

export default PostPet;