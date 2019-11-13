import React, {Component} from 'react';
import Login from '../components/Login.js';
import Cities from '../components/Cities.js';
import Account from '../components/Account.js';
import Home from '../components/Home.js';
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
const routes = () => (
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/account">
    <Account />
    </Route>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/cities">
    <Cities />
    </Route>
    </Switch>
)
export default routes;