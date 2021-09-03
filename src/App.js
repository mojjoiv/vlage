import React from 'react';
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SearchPage from './SearchPage';
import SingleHotel from './SingleHotel';
import Profile from './Profile';
// import SignIn from  './SignIn'; 

function App(){
    return (
      <div className="app">

      <Router>
        <Header/>

            <Switch>
              <Route path="/Search">
                  <SearchPage/>
              </Route>
              <Route path="/Profile">
                  <Profile/>
              </Route>

              <Route path="/">
                  <Home/>
              </Route>
              <Route path="/SingleHotel">
                  <SingleHotel/>
              </Route>
              
            </Switch>

      
        <Footer/>
      </Router>
      </div>
    );
}

export default App;