import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">PetFinder SD</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </nav>

        <div class="panel panel-default">
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
    );
  }
}

export default App;
