import React from 'react';
import Login from '../components/Login.js';
import Cities from '../components/Cities.js';
import Itineraries from '../components/Itineraries.js';
import Account from '../components/Account.js';
import Home from '../components/Home.js';
import Profile from '../components/Profile'

import '../styles/App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
 
const routes = () => (
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/account" component = {Account} />
      <Route path="/login" component = {Login} />
      <Route exact path="/cities" component = {Cities} />
      <Route path="/cities/:cityID" component = {Itineraries} />
      <Route exact path="/profile/:token" component = {Profile}/>
      
    
    </Switch>
)
export default routes;