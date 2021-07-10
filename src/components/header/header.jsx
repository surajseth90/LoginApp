import React, { Component } from 'react'
import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <div className="left-side">
                    <Link to="/home"> 
                        <button className="home button">Home</button>
                        </Link>
                        <button className="about button">About</button>
                    </div>
                    <div className="right-side">
                        <Link to="/signup">                       
                         <button className="sign-up button">SignUp</button>
                         </Link>
                         <Link to="/login">
                        <button className="login-in button">Login</button>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
