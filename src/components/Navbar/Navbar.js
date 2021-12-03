import React from 'react';
import {BrowserRouter as Router, Switch,Route,Link,Redirect} from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
        <div>
            <Link className="navTitle" to="/">ZooSchool</Link>
        </div>

        <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>
        </div>
    )
}


export default Navbar;