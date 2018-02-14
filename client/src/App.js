import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import LogIntoAccount from "./components/LogIntoAccount";
import CreateAccount from "./components/CreateAccount";
import About from "./components/About";
import FindPet from "./components/FindPet";
import Profile from "./components/Profile";
import PostPet from "./components/PostPet";
import SuccessStories from './components/SuccessStories/SuccessStories';



class App extends Component {
  state = {
    currentPage: "Home",
    name: "",
    email: "",
    password: "",
    pets: [],


  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFormSubmit = param => e =>  {
    e.preventDefault();
    console.log(e);
    console.log(param);

    // with axios
    // make a request to your server 
    // with data
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
      <Route exact path="/LogIntoAccount" component={LogIntoAccount} />
      <Route exact path="/PostPet" component={PostPet} />
      <Route exact path="/About" component={About} />
      <Route exact path="/CreateAccount" render={() => <CreateAccount handleFormSubmit={this.handleFormSubmit} />}/>
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