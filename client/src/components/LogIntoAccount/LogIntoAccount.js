import React from "react";
import "./LogIntoAccount.css";
import { Link } from "react-router-dom";

const LogIntoAccount = props => (
    <div className='log-in-container'>
    <h2>Pet Adoption SD Log In</h2>
    <h4>Please enter your credentials to access your account</h4>
    <form onSubmit="submit">

      <label htmlFor="email">Email</label><br />
      <input id="email" placeholder="Email" ref={email => this.email = email} /><br />

      <label htmlFor="password">Password</label><br />
      <input id="password" placeholder="Password" ref={password => this.password =  password} /><br />

      <Link to="Home"><button>Submit</button></Link>     
      <Link to="CreateAccount">Create Account</Link>     
      

    </form>
  </div>

)

export default LogIntoAccount;