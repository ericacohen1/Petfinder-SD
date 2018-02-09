import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import About from "./components/About";
import FindPet from "./components/FindPet";
import SuccessStories from './components/SuccessStories/SuccessStories';



class App extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
    
  render() {



    return (
    
    
    <div>
      <Header />

      <Router>
    <div>

    
      <Nav currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}/>
      
      <Route exact path="/Home" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/CreateAccount" component={CreateAccount} />
      <Route exact path="/FindPet" component={FindPet} />
      <Route exact path="/SuccessStories" component={SuccessStories} />
    </div>
  </Router>
</div>


);
}
}




 




       {/* <div class="panel panel-default">
        <div class="panel-body">
            <div class="row">
              <div class="col-md-4">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      Adopt a pet
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      Find a new home for my pet
                    </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      Success stories
                    </div>
                  </div>
              </div>
            </div>
         </div> 
      </div> 
     </div> 
      */}

export default App;