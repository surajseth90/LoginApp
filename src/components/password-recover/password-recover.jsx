import React, { Component } from 'react'

export default class PasswordRecovery extends Component {

    resetPassword=(event)=>{
        event.preventDefault();
        event.stopPropagation();
        alert("changed")
    }

    render() {
        return (
            <div className="main">
                <div className="container">
                    <h3>Recover Your Password</h3>
                    <form onSubmit={this.resetPassword}>

                        <div className="form-group">
                            <label className="label" htmlFor="email" >Email</label>
                            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeHandler} />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="question" >Question</label>

                            <select className="form-control" name="question">
                                <option value="" disabled selected>Select Question</option>
                                <option value="fruit">What is your favorite fruit ?</option>

                                <option value="color">What is your favorite color ?</option>
                                <option value="cricketer">Who is your favorite cricketer ?</option>
                                <option value="teacher">Who is your favorite teacher ?</option>
                                <option value="person">Who is your favorite person ?</option>
                            </select>
                        </div>

                        <div className="form-group">
                                <label className="label" htmlFor="answer" >Answer</label>
                                <input type="text" className="form-control" id="answer" name="answer" aria-describedby="answerHelp" placeholder="Enter your answer" onChange={this.onChangeHandler} required />
                            </div>

                        <div className="form-group">
                            <label className="label" htmlFor="password" >Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="New Password" />
                        </div>

                        <div className="form-group">
                            <label className="label" htmlFor="password2" >Password</label>
                            <input type="password" className="form-control" id="password2" name="password2" placeholder="Confirm Password" />
                        </div>

                        <button type="submit" className="button" >Change Password</button>

                    </form>
                </div>
            </div>
        )
    }
}
