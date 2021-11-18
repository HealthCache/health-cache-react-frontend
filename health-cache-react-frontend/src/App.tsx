import React, {Component} from 'react';
import 'reset-css';
import NavbarScroller from './components/Navbar'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Claims from './components/claims/Claims';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {Profile} from "./components/profile/Profile";

const navigation = {
  brand: { name: 'HealthCache', to: '/' },
  links: [
    {name: 'Login', to: '/Login'},
    {name:'Register', to:'/Register'},
    { name: 'Profile', to: '/Profile'},
    { name: 'File Claim', to: '/FileClaim'},
    { name: 'Discussion Board', to: '/Discussion'}
    
  ]
}

export default class App extends Component {
    public render() {
        const {brand, links} = navigation;



    return (
      <div className="App">
        <Router>
          <NavbarScroller brand={brand} links={links} />

          <Routes>
          <Route  path="/Login" element={<Login></Login>}></Route>
          <Route  path="/Register" element={<Register></Register>}></Route>
          <Route  path="/Profile" ></Route>
          <Route path="/FileClaim" element={<Claims></Claims>}></Route>
          <Route path="/Discussion" ></Route>
          
          </Routes>
        </Router>
      </div>
    );
  }
}
