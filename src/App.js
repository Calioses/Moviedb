/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';

import { BrowserRouter as Router,
  Route,
  Switch,
  Link } from 'react-router-dom';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img
            src={logo}
            className=" App-logo"
            alt="logo"
          />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />

      </Switch>
    </div>
  </Router>
);

export default App;

