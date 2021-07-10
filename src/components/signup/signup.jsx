import React, { Component } from 'react'
import './signup.css'
// import { browserHistory } from 'react-router'
import { Redirect } from 'react-router-dom';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            question: '',
            answer: '',
            password: '',
            password2: '',
            valid: {
                firstName: '',
                lastName: '',
                gender: '',
                email: '',
                question: '',
                answer: '',
                password: '',
                password2: ''
            },
            error: {
                firstName: '',
                lastName: '',
                gender: '',
                email: '',
                question: '',
                answer: '',
                password: '',
                password2: ''
            },
            isError: false,
            redirect:null

        }
    }

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        this.checkValidation(event.target.name, event.target.value)
    }

    checkValidation = (field, value) => {
        if (field === 'firstName') {

            if (value.length === 0) {
                this.initializeMessage('firstName', '', '');
            }
            else {
                const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}?$");
                if (NAME_REGEX.test(value)) {
                    this.initializeMessage('firstName', '', '✓');

                } else {
                    this.initializeMessage('firstName', 'Invalid Form!', '');
                }
            }
        }

        if (field === 'lastName') {

            if (value.length === 0) {
                this.initializeMessage('lastName', '', '');
            }
            else {
                const NAME_REGEX = RegExp("^[A-Z]{1}[a-z]{2,}?$");
                if (NAME_REGEX.test(value)) {
                    this.initializeMessage('lastName', '', '✓');

                } else {
                    this.initializeMessage('lastName', 'Invalid Form!', '');
                }
            }
        }

        if (field === 'gender') {

            if (value.length === 0) {
                this.initializeMessage('gender', 'Required!', '');

            } else {
                this.initializeMessage('gender', '', '✓');
            }
        }

        if (field === 'email') {

            if (value.length === 0) {
                this.initializeMessage('email', 'Required !', '');

            } else {
                this.initializeMessage('email', '', '✓');
            }
        }

        if (field === 'question') {

            if (value.length === 0) {
                this.initializeMessage('question', 'Required!', '');

            } else {
                this.initializeMessage('question', '', '✓');

            }
        }
        if (field === 'answer') {
            if (value.length === 0) {
                this.initializeMessage('answer', 'Required!', '');

            } else {
                this.initializeMessage('answer', '', '✓');

            }
        }
        if (field === 'password') {
            if (value.length === 0) {
                this.initializeMessage('password', '', '');
            }
            else {
                const NAME_REGEX = RegExp("^[A-Z]{1}[a-z0-9@]{6,}?$");
                if (NAME_REGEX.test(value)) {
                    this.initializeMessage('password', '', '✓');

                } else {
                    this.initializeMessage('password', 'Invalid!', '');

                }
            }
        }
        if (field === 'password2') {

            if (value.length === 0) {
                this.initializeMessage('password2', '', '');
            }
            else if((this.state.password)===(this.state.password2)) {
                this.initializeMessage('password2', 'Password is not matched', '');
                this.setState({ isError: true })
            } else {
                this.initializeMessage('password2', '', '✓');
                this.setState({ isError: false })
            }
        }

    }

    initializeMessage = (field, errorMessage, validMessage) => {
        this.setState(previousState => ({
            error: {
                ...previousState.error,
                [field]: errorMessage
            }
        }));
        this.setState(previousState => ({
            valid: {
                ...previousState.valid,
                [field]: validMessage
            }
        }));
    }

    // redirect(){
    //     this.context.router.push("/login")
    // }
    
    signup = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!this.state.isError) {
            console.log("pass");
            let object = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                email: this.state.email,
                question: this.state.question,
                answer: this.state.answer,
                password: this.state.password
            }
            console.log(object);
        }
        else
            alert("request failed")
        // this.props.history.push("/login")
        this.setState({redirect:"/home"})
        // browserHistory.push("/login")
    }

    render() {
        if(this.state.redirect){
            return <Redirect to="/home"/>
        }
        return (
            <div className="body">
                <div className="main">
                    <div className="signup">
                        <h2 className="signupFormHeader">Sign-Up</h2>
                        <form onSubmit={this.signup}>
                            <div className="form-group">
                                <label className="label" htmlFor="firstName">First Name</label>
                             
                                <input type="text" className="form-control" name="firstName" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.onChangeHandler} required />
                                <br></br>
                                <valid-message className="valid-name" htmlFor="firstName">{this.state.valid.firstName}</valid-message>
                                <error-output className="name-error" htmlFor="firstName">{this.state.error.firstName}</error-output>

                            </div>

                            <div className="form-group">
                                <label className="label" htmlFor="lastName" >Last Name</label>
                                <input type="text" className="form-control" name="lastName" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name" onChange={this.onChangeHandler} required />
                                <valid-message className="valid-name" htmlFor="lastName">{this.state.valid.lastName}</valid-message>
                                <error-output className="name-error" htmlFor="lastName">{this.state.error.lastName}</error-output>

                            </div>


                            <div className="form-group">
                                <label className="label" htmlFor="gender">Gender</label>

                                <label>
                                    <input type="radio" id="male" checked={this.state.gender === 'male'} onChange={this.onChangeHandler} name="gender" value="male" required />
                                    <label className="label" htmlFor="male">Male</label>
                                </label>
                                <label>
                                    <input type="radio" id="female" checked={this.state.gender === 'female'} onChange={this.onChangeHandler} name="gender" value="female" required />
                                    <label className="label" htmlFor="female">Female</label>
                                </label>
                                <valid-message className="valid-name" htmlFor="gender">{this.state.valid.gender}</valid-message>
                                <error-output className="name-error" htmlFor="gender">{this.state.error.gender}</error-output>

                            </div>

                            <div className="form-group">
                                <label className="label" htmlFor="email" >Email</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeHandler} required />
                                <valid-message className="valid-name" htmlFor="email">{this.state.valid.email}</valid-message>
                                <error-output className="name-error" htmlFor="email">{this.state.error.email}</error-output>

                            </div>


                            <div className="form-group">
                                <label className="label" htmlFor="question" >Question</label>

                                <select className="form-control2" name="question" onChange={this.onChangeHandler} required>
                                    <option value="" disabled selected>Select Question</option>
                                    <option value="fruit">What is your favorite fruit ?</option>
                                    <option value="color">What is your favorite color ?</option>
                                    <option value="cricketer">Who is your favorite cricketer ?</option>
                                    <option value="teacher">Who is your favorite teacher ?</option>
                                    <option value="person">Who is your favorite person ?</option>
                                </select>
                                <valid-message className="valid-name" htmlFor="question">{this.state.valid.question}</valid-message>
                                <error-output className="name-error" htmlFor="question">{this.state.error.question}</error-output>

                            </div>


                            <div className="form-group">
                                <label className="label" htmlFor="answer" >Answer</label>
                                <input type="text" className="form-control" id="answer" name="answer" aria-describedby="answerHelp" placeholder="Enter your answer" onChange={this.onChangeHandler} required />
                                <valid-message className="valid-name" htmlFor="answer">{this.state.valid.answer}</valid-message>
                                <error-output className="name-error" htmlFor="answer">{this.state.error.answer}</error-output>

                            </div>


                            <div className="form-group">
                                <label className="label" htmlFor="password" >Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" onChange={this.onChangeHandler} required />
                                <valid-message className="valid-name" htmlFor="password">{this.state.valid.password}</valid-message>
                                <error-output className="name-error" htmlFor="password">{this.state.error.password}</error-output>

                            </div>

                            <div className="form-group">
                                <label className="label" htmlFor="password2" >Password</label>
                                <input type="password" className="form-control" id="password2" name="password2" placeholder="Confirm Password" onChange={this.onChangeHandler} required />
                                <valid-message className="valid-name" htmlFor="password2">{this.state.valid.password2}</valid-message>
                                <error-output className="name-error" htmlFor="password2">{this.state.error.password2}</error-output>

                            </div>

                            <button type="submit" className="btn" >SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
