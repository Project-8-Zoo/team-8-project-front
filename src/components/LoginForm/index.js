import React from 'react'
import "./style.css"

export default function LoginForm(props) {
    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginContainer">
        <form onSubmit={props.submit} className="LoginForm">
            <input className="userLogin" onChange={props.change} name="username" value={props.loginState.username} placeholder="username"></input>
            <input className="passLogin" onChange={props.change} name="password" value={props.loginState.password} placeholder="password" type="password"></input>
            <button className="LoginBtn">Login</button>
        </form>
            </div>
        </div>
    )
}
