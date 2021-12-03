import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch,Route,Link,Redirect} from "react-router-dom";
import "./Navbar.css"

function Navbar(props) {
    return (
        <div className="navbar">
        <div>
            <Link className="navTitle" to="/game">ZooSchool</Link>
        </div>

        <div className="navLinks">
        {/* {userState.username}  */}
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </div>
        </div>
    )
}


export default Navbar;