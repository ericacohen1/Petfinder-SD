import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import LogIntoAccount from "./components/LogIntoAccount";
import CreateAccount from "./components/CreateAccount";
import About from "./components/About";
import FindPet from "./components/FindPet";
import Profile from "./components/Profile";
import PostPet from "./components/PostPet";
import SuccessStories from './components/SuccessStories/SuccessStories';
// import utils from './utils/API';
import axios from 'axios';
// import { Link } from "react-router-dom";

class App extends Component {
  state = {
    currentPage: "Home",
    name: "",
    email: "",
    password: "",
    pets: [],
    isAuthenticated: false
  };


  handleNameChange = e => {
    this.setState({name: e.target.value});
    console.log(this.state.name);
 };

  handleEmailChange = e => {
    this.setState({email: e.target.value});
    console.log(this.state.email);
 };

 handlePasswordChange = e => {
  this.setState({password: e.target.value});
  console.log(this.state.password);
};

handlePetNameChange = e => {
  this.setState({petName: e.target.value});
  console.log(this.state.petName);
};

handleBreedChange = e => {
  this.setState({breed: e.target.value});
  console.log(this.state.breed);
};

handleAgeChange = e => {
  this.setState({age: e.target.value});
  console.log(this.state.age);
};

handleBioChange = e => {
  this.setState({bio: e.target.value});
  console.log(this.state.bio);
};




  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //new user
  handleFormSubmit = param => e =>  {
    e.preventDefault();
    
    
    axios.post("/api/users", this.state).then(res => {
      
      this.setState({isAuthenticated: true});
    }) ;
    
  };
  
  handleFormSubmitExistingUser = param => e =>  {
    e.preventDefault();
    
    axios.post("/api/users/login", this.state).then(res => {
     
      this.setState({isAuthenticated: true});
    }).catch(err => alert(err));
    


  };
  

  render() {

    return (
    
    <div>
      

      <Router>
    
    <div>
    <Header />
    
      <Nav 
      
      currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}/>
      
      <Route exact path="/Home" component={Home} />
      <Route exact path="/LogIntoAccount" render={() => {
        const isAuthenticated = this.state.isAuthenticated;
        if (isAuthenticated) {
          return <Redirect to="/Home"/>;
        }
        return (<LogIntoAccount 
          handleEmailChange={this.handleEmailChange}
          handlePasswordChange={this.handlePasswordChange}
          handleFormSubmitExistingUser={this.handleFormSubmitExistingUser}
        />)}}
      />
      <Route exact path="/PostPet" render={() => <PostPet handlePetNameChange={this.handlePetNameChange} handleAgeChange={this.handleAgeChange} handleBreedChange={this.handleBreedChange} handleBioChange={this.handleBioChange} handleFormSubmit={this.handleFormSubmit} />}/>
      <Route exact path="/About" component={About} />
      <Route exact path="/CreateAccount" render={() => {
        const isLoggedIn = this.state.isAuthenticated;
        // const newUser=this.state.newUser;
        if (isLoggedIn) {
          return <Redirect to="/Home"/>;
        }
        // if (newUser) {
        //   return <Redirect to="/Home"/>;
        // }
        return (<CreateAccount 
          handleNameChange={this.handleNameChange} 
          handleEmailChange={this.handleEmailChange} 
          handlePasswordChange={this.handlePasswordChange} 
          handleFormSubmit={this.handleFormSubmit} 
        />)}}
      />
      <Route exact path="/FindPet" component={FindPet} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/SuccessStories" component={SuccessStories} />
    </div>
  </Router>
  <Footer />
</div>


);
}
}




 




       

export default App;