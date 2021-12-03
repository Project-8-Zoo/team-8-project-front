import React, { useState, useEffect } from 'react';

import API from './utils/API';

import {BrowserRouter as Router, Switch,Route,Link,Redirect} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import Profile from "./components/Profile";
import SignupForm from "./components/SignupForm"
import LoginForm from './components/LoginForm';
import Character from './components/Character';
import GardenDoor from './components/GardenDoor'
import Questions from './components/ui/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';
const axios = require("axios");

function App() {
  const [userState, setUserState] = useState({
    username: "",
    id: 0
  });
  const [token, setToken] = useState("");
  //loginform
  const [loginFormState, setLoginFormState] = useState({
    username: "",
    password: ""
  })
  //signup form
  const [signupFormState, setSignupFormState] = useState({
    username: "",
    password: ""
  })

  // highscore in state
  // const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    const myToken = localStorage.getItem("token");
    console.log("use effected")
    if (myToken) {
      API.getProfile(myToken).then(res => {
        console.log("workded")
        console.log(res)
        setToken(myToken)
        setUserState({
          username: res.data.username,
          id: res.data.id
        })
      }).catch(err => {
        console.log("failed")
        console.log(err)
        localStorage.removeItem("token")
      })
    }
  }, [])

  const handleLoginChange = event => {
    if (event.target.name === "username") {
      setLoginFormState({
        ...loginFormState,
        username: event.target.value
      })
    } else {
      setLoginFormState({
        ...loginFormState,
        password: event.target.value
      })
    }
  }

  const handleSignupChange = event => {
    if (event.target.name === "username") {
      setSignupFormState({
        ...signupFormState,
        username: event.target.value
      })
    } else {
      setSignupFormState({
        ...signupFormState,
        password: event.target.value
      })
    }
  }

  const handleLoginSubmit = e => {
    e.preventDefault();
    API.login(loginFormState).then(res => {
      console.log(res.data)
      setUserState({
        username: res.data.user,
        id: res.data.id
      })
      console.log(res.data.user)
      console.log(res.data.id)
      setToken(res.data.token)
      localStorage.setItem("token", res.data.token)
      window.location.href="/"
    }).catch(err => {
      console.log(err);
    })
    console.log(userState);
  }

  const handleSignupSubmit = e => {
    e.preventDefault();
    API.signup(signupFormState).then(res => {
      API.login(loginFormState).then(res => {
        console.log(res.data)
        setUserState({
          username: res.data.user,
          id: res.data.id
        })
        console.log(res.data.user)
        console.log(res.data.id)
        setToken(res.data.token)
        localStorage.setItem("token", res.data.token)
      }).catch(err => {
        console.log(err);
      })
      console.log(userState);
    })
  }


  const logMeOut = () => {
    setUserState({
      email: "",
      id: 0
    });
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        <div className="GameContainer">
          <div className="LowerContainer">
              <GardenDoor />
          </div>
        </div>
  
        </Route>

        <Route exact path="/login">
        <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} />
          

        </Route>

        <Route exact path="/signup">
        <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
          
        </Route>

      </Switch>
      </Router>
  );
}

export default App;
