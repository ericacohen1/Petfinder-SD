import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./components/Header";
// import Router from "./components/Router";
import './App.css';

const App = () =>

    <div>
      <Header />
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

export default App;
