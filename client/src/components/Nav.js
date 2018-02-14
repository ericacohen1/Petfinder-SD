import React from "react";
import { Link } from "react-router-dom";
import findPetLogo from "../img/find-pet.png";
import success from "../img/success.png";
import postPetLogo from "../img/post-pet.png";

const Nav = props =>
  
<div className ="container">
<div className ="row">
 <div className ="col-md-4">   
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title"> <Link to="FindPet">Find A Pet</Link></h3>
  </div>
  <div className="panel-body">
    <img src={findPetLogo}/>
  </div>
</div>
</div>


<div className ="col-md-4"> 
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title"> <Link to="PostPet">Post A Pet</Link></h3>
  </div>
  <div className="panel-body">
  <img src={postPetLogo}/>
  </div>
</div>
    </div>

<div className ="col-md-4"> 
<div className="panel panel-default">
  <div className="panel-heading">
    <h3 className="panel-title"> <Link to="SuccessStories">Success Stories</Link></h3>
  </div>
  <div className="panel-body">
  <img src={success}/>
  </div>
</div>
    </div>
    
    </div>
   </div>
   
    
    
    
  

 

export default Nav;