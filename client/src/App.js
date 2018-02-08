import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
       
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
