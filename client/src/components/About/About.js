import React from "react";
import "./About.css";

const About = props => (
  <div className="container">
    <div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title">About Us</h3>
  </div>
  <div className="panel-body">
  <p>The goal of PetFinder SD is to keep as many furry friends in the San Diego area out of pounds and shelters as possible. We built this application to connect pet owners who are unable to take care of their pet with people looking to adopt a pet. </p>
      <h4>Our Mission: </h4>
      <p>Crete a simple and easy online marketplace for pets in order to: </p>
      <ol>
        <li>Increase public awareness of local pets that need a home</li>
        <li>Increase the overall effectiveness of pet adoption programs in the area</li>
        <li>Decrease the number of pets sent to shelters</li>
        <li>Elevate the status of pets to that of family members</li>
      </ol>
  </div>
  </div>
</div>
)

export default About;