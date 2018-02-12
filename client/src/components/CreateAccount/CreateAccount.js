import React from "react";
import "./CreateAccount.css";
import { Link } from "react-router-dom";

const CreateAccount = props => (
       <div>
           <div className="account-container">
           <h2>Create Your Pet Adoption SD Account</h2>
           <h4>Complete the fields below to sign up!</h4>
           <form onSubmit="submit">
             <input id="name" placeholder="Name" value='name' /><br />
             <input id="email" placeholder="Email" value='email' /><br />
             <input id="password" placeholder="Password" value='password' /><br />
             <input id="address" placeholder="Address" value='address' /><br />
             <input id="zipcode" placeholder="Zipcode" value='zipcode' /><br />
             <input id="city" placeholder="City" value='city' /><br />
             <input id="state" placeholder="State" value='state' /><br />
             <Link to="Home"><button>Submit</button></Link>     
             <Link to="LogIntoAccount">Log In</Link>    
           </form>
         </div>
       </div>

)

export default CreateAccount;