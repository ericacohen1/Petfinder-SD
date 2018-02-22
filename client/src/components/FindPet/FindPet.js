import React from "react";
import "./FindPet.css";

// const FindPet = props => (
//        <p>Find A Pet</p>
       
// )

const FindPet = props => (
    // <p>Find A Pet</p>

 

    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Contact Info:</strong> {props.contactInfo}
          </li>
          <li>
            <strong>Breed:</strong> {props.breed}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          {/* <li>
            <strong>Image:</strong> {props.image}
          </li> */}
          <li>
            <strong>Description:</strong> {props.description}
          </li>
        </ul>
      </div>
     </div>
    
  );

export default FindPet;
