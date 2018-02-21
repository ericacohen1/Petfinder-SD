import React from "react";
import "./LogIntoAccount.css";
import { Link } from "react-router-dom";

const LogIntoAccount = props => (
    <div className='log-in-container'>
    <h2>Pet Adoption SD Log In</h2>
    <h4>Please enter your credentials to access your account</h4>
    <form>

      <label htmlFor="email">Email</label><br />
      <input type="email" name="email" placeholder="Email" onChange={props.handleEmailChange} /><br />

      <label htmlFor="password">Password</label><br />
      <input type="password" name="password" placeholder="Password" onChange={props.handlePasswordChange} /><br />

      <Link to="Home"><button onClick={props.handleFormSubmitExistingUser("accountData")}>Submit</button></Link>  

      <Link to="CreateAccount">Create Account</Link>     
      

    </form>
  </div>

)

export default LogIntoAccount;