import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { Router, Route, Redirect } from "react-router-dom";
import './App.css';
//import Home from "./components/Home";
import LogIntoAccount from "./components/LogIntoAccount";
import CreateAccount from "./components/CreateAccount";
import About from "./components/About";
import FindPet from "./components/FindPet";
import Profile from "./components/Profile";
import PostPet from "./components/PostPet";
import SuccessStories from './components/SuccessStories/SuccessStories';
import API from './utils/API';
import axios from 'axios';

import history from './history.js';

class App extends Component {
  state = {
    currentPage: "Home",
    name: "",
    email: "",
    password: "",
    pets: [],
    isAuthenticated: false,
    userId: "",
    image: "",
    contactInfo: "" // change
  };

  findPet = id => {
    // Filter this.state.pets for pets with an id not equal to the id being removed
    const pets = this.state.pets.filter(pet => pet.id !== id);
    // Set this.state.pets equal to the new pets array
    this.setState({ pets });
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.getPets();
  }

  // Loads all books  and sets them to this.state.books
  getPets = () => {
    API.getPets()
      .then(res =>
        this.setState({ pets: res.data, name: "", breed: "", age: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };

  handleImageChange = e => {
    this.setState({ image: e.target.value });
    console.log(this.state.image);
  };

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };

  handlePetNameChange = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };

  handleContactInfoChange = e => {
    this.setState({ email: e.target.value }); // maybe needs to be contact info
    console.log(this.state.email);
  };

  handleBreedChange = e => {
    this.setState({ breed: e.target.value });
    console.log(this.state.breed);
  };

  handleAgeChange = e => {
    this.setState({ age: e.target.value });
    console.log(this.state.age);
  };

  handleBioChange = e => {
    this.setState({ description: e.target.value });
    console.log(this.state.description);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //new user
  handleFormSubmit = param => e => {
    e.preventDefault();


    axios.post("/api/users", this.state).then(res => {

      this.setState({ isAuthenticated: true, userId: res.data._id });
    });

  };

  handleFormSubmitExistingUser = param => e => {
    e.preventDefault();
    axios.post("/api/users/login", this.state).then(res => {
      this.setState({ isAuthenticated: true, userId: res.data._id });
    }).catch(err => alert(err));
  };

  handleFormSubmitNewPet = param => e => {
    e.preventDefault();
    axios.post("/api/pets", this.state).then(res => {
      // go to the homepage
      // this.props.history.push("Home");
      history.push('/Home');
    }).catch(err => alert(err));

  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false })
  }



  render() {
    console.log(this.state.pets);
    return (


      <div>



        <Router history={history}>

          <div>
            <Header
              handleLogout={this.handleLogout}
              isAuthenticated={this.state.isAuthenticated}
              // need to update to take in user name...
              name={this.state.name}
            />
            
            <Route exact path="/" render = {() => {
              if(this.state.isAuthenticated) {
                return <Redirect to="/Home" />;
              }
              return <Redirect to="/LogIntoAccount" />;
            }} />
            <Route exact path="/Home" component={Nav} />
            <Route exact path="/LogIntoAccount" render={() => {
              const isLoggedIn = this.state.isAuthenticated;
              if (isLoggedIn) {
                return <Redirect to="/Home" />;
              }
              return (<LogIntoAccount
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleFormSubmitExistingUser={this.handleFormSubmitExistingUser}
              />)
            }}
            />
            <Route exact path="/PostPet" render={() => {
              const isLoggedIn = this.state.isAuthenticated;
              if (!isLoggedIn) {
                return <Redirect to="/LogIntoAccount" />;
              }
              return (<PostPet
                handlePetNameChange={this.handlePetNameChange}
                handleAgeChange={this.handleAgeChange}
                handleBreedChange={this.handleBreedChange}
                handleBioChange={this.handleBioChange}
                handleImageChange={this.handleImageChange}
                handleContactInfoChange={this.handleContactInfoChange}
                handleFormSubmitNewPet={this.handleFormSubmitNewPet}
              />)
            }}
            />
            <Route exact path="/About" component={About} />
            <Route exact path="/CreateAccount" render={() => {
              const isLoggedIn = this.state.isAuthenticated;
              // const newUser=this.state.newUser;
              if (isLoggedIn) {
                return <Redirect to="/Home" />;
              }
              // if (newUser) {
              //   return <Redirect to="/Home"/>;
              // }
              return (<CreateAccount
                handleNameChange={this.handleNameChange}
                handleEmailChange={this.handleEmailChange}
                handlePasswordChange={this.handlePasswordChange}
                handleFormSubmit={this.handleFormSubmit}
              />)
            }}
            />
            {/* <Route exact path="/FindPet" component={FindPet} /> */}
            <Route exact path="/FindPet" render={() => this.state.pets.map(pet => (
              <FindPet
                id={pet.id}
                key={pet.id}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                image={pet.image}
                contactInfo={pet.email}
                description={pet.description}
              />
            ))} />
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