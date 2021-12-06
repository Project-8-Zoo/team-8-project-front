import React, { useState, useEffect } from 'react';

import API from './utils/API';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Game from './components/Game'
import Homepage from './components/Homepage/index';
// import Profile from "./components/Profile";
import SignupForm from "./components/SignupForm"
import LoginForm from './components/LoginForm';
// import Character from './components/Character';
// import GardenDoor from './components/GardenDoor'
// import Questions from './components/ui/Questions';

import './App.css';
// const axios = require("axios");

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
        console.log("worked")
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
      localStorage.setItem("username", res.data.user)
      window.location.href = "/game"
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
        localStorage.setItem("username", res.data.user)
        window.location.href = "/game"
        window.alert("You have logged in. Navigate to Zooschool game")
      }).catch(err => {
        console.log(err);
      })
      console.log(userState);
    })
  }


  const logMeOut = () => {
    setUserState({
      username: "",
      id: 0
    });
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // window.location.href = "/home"
  }

  return (
    <Router>

      {!token ? (
        <div>
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
        </div>
      ) : (
        <div>
          <div className="navbar">
            <div>
              <Link className="navTitle" to="/game">ZooSchool</Link>
            </div>
            

            <div className="navLinks">
              {/* {userState.username}  */}
              <Link to="/">Home</Link>
              

            </div>
            <button onClick={logMeOut} className="LogoutBtn" >Logout</button>
          </div>

        </div>
      )}

      <Switch>
        <Route exact path="/login">
          {!token ? <LoginForm submit={handleLoginSubmit} change={handleLoginChange} loginState={loginFormState} /> : <Redirect to="/game" />}
        </Route>

        <Route exact path="/signup">
          <SignupForm submit={handleSignupSubmit} change={handleSignupChange} signupState={signupFormState} />
        </Route>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/game">
          {token ? <Game user={userState} token={token} /> : <Redirect to="/login" />}
         
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


