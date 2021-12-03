import React from 'react'
import "./style.css"

export default function SignupForm(props) {
    return (
        <div className="SignUp">
            <h1>Register</h1>
            <div className="SignupContainer">
        <form onSubmit={props.submit} className="SignupForm">
            <input className="userSign" onChange={props.change} name="username" value={props.signupState.username} placeholder="username"></input>
            <input className="passSign" onChange={props.change} name="password" value={props.signupState.password} placeholder="password" type="password"></input>
            <button className="SignupBtn">Sign Up</button>
        </form>
            </div>
        </div>
    )
}
