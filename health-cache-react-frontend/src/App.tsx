import React, {Component} from 'react';
import 'reset-css';
import NavbarScroller from './components/Navbar'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Claims from './components/claims/Claims';
import {Profile} from "./components/profile/Profile";
import {Login} from "./components/login/Login"
import { Register } from './components/register/Register';


const navigation = {
    brand: {name: 'HealthCache', to: '/'},
    links: [
        {name: 'Profile', to: '/Profile'},
        {name: 'File Claim', to: '/FileClaim'},
        {name: 'Discussion Board', to: '/Discussion'}

    ]
};

export default class App extends Component {
    public render() {
        const {brand, links} = navigation;

        return (
            <div className="App">
                <Router>
                    <NavbarScroller brand={brand} links={links}/>
                    <Routes>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Register' element={<Register/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/FileClaim" element={<Claims/>}/>
                        <Route path="/Discussion"/>
                        {/*<Route path='*' element={<NotFound />} />*/}
                    </Routes>
                </Router>
            </div>
        );
    }
}