import React from "react";
import "./CreateAccount.css";
import { Link } from "react-router-dom";

const CreateAccount = props => (
       
       <div>
          <h4>{props.something}</h4>
           <div className="account-container">
           <h2>Create Your Pet Adoption SD Account</h2>
           <h4>Complete the fields below to sign up!</h4>
           <form onSubmit="submit">
          
             <input type="text" name="name" placeholder="Name" onChange={props.handleNameChange} /><br />
             <input type="email" name="email" placeholder="Email" onChange={props.handleEmailChange} /><br />
             <input type="password" name="password" placeholder="Password" onChange={props.handlePasswordChange} /><br />
             {/* <input type="text" name="zipcode" placeholder="Zipcode" /><br /> */}
            
             <Link to="Home"><button onClick={props.handleFormSubmit(props)}>Submit</button></Link>     
             <Link to="LogIntoAccount">Log In</Link>    
           </form>
         </div>
       </div>

)

export default CreateAccount;