import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './loginpage.css'

export default class Login extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <div className="container">
                        <h3>Login</h3>
                        <form onSubmit="#" >
                            <div className="row">
                                <label className="label" htmlFor="email" >Email</label>
                                <input type="email" className="text" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeHandler} />
                            </div>
                            <div className="row">
                                <label className="label" htmlFor="password">Password</label>
                                <input className="text" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="loginButton">
                                <button className="login" type="submit">Login Here</button>
                            </div>
                            <div>
                                <h4>Did you forget your passord....</h4>
                                <Link to="/password-recover" className="linktorecovery">Click here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
