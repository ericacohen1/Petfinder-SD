import React, { Component } from 'react';
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
import API from './utils/API';
import axios from 'axios';



class App extends Component {
  state = {
    currentPage: "Home",
    name: "",
    email: "",
    password: "",
    pets: [],
    isAuthenticated: false,
    userId: ""
    
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
  this.setState({name: e.target.value});
  console.log(this.state.name);
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
  this.setState({description: e.target.value});
  console.log(this.state.description);
};




  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //new user
  handleFormSubmit = param => e =>  {
    e.preventDefault();
    
    
    axios.post("/api/users", this.state).then(res => {
      
      this.setState({isAuthenticated: true, userId: res.data._id});
    }) ;
    
  };
  
  handleFormSubmitExistingUser = param => e =>  {
    e.preventDefault();
    axios.post("/api/users/login", this.state).then(res => {
      this.setState({isAuthenticated: true, userId: res.data._id});
    }).catch(err => alert(err));
  };

  handleFormSubmitNewPet = param => e =>  {
    e.preventDefault();
    console.log(true);
    axios.post("/api/pets", this.state).then(res => {
      
      this.setState({isAuthenticated: true});
      // go to the homepage
    }).catch(err => alert(err));
    
  };
  
  

  render() {
    console.log(this.state.pets);
    return (

    
      <div>
        
        {/* {this.state.pets.map(pet => (
            <FindPet
              id={pet.id}
              key={pet.id}
              name={pet.name}
              breed={pet.breed}
              age={pet.age}
              // image={pet.image}
              description={pet.description}
            />
          ))} */}

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
            <Route exact path="/PostPet" render={() => {
              const isAuthenticated = this.state.isAuthenticated;
              if (!isAuthenticated) {
                return <Redirect to="/LogIntoAccount"/>;
              }
              return (<PostPet
                handlePetNameChange={this.handlePetNameChange}
                handleAgeChange={this.handleAgeChange}
                handleBreedChange={this.handleBreedChange}
                handleBioChange={this.handleBioChange}
                handleFormSubmitNewPet={this.handleFormSubmitNewPet}
              />)}}
            />
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
            {/* <Route exact path="/FindPet" component={FindPet} /> */}
              <Route exact path="/FindPet" render={() => this.state.pets.map(pet => (
                <FindPet
                  id={pet.id}
                  key={pet.id}
                  name={pet.name}
                  breed={pet.breed}
                  age={pet.age}
                  // image={pet.image}
                  description={pet.description}
                />
              ))}  />
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