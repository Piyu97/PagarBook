import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from "axios"
import { registerInfo } from "../redux/action"

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            phone: 0,
            email: "",
            password: ""
        }
    }

    // function to set the state
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // function to register a user
    handleSubmit = (e) => {
        e.preventDefault()
        let details = this.state
        axios({
            method: 'post',
            url: "http://127.0.0.1:5000/auth/register",
            data: {
                email: details.email,
                password: details.password,
                name: details.name,
                phone: details.phone,
            }
        })
            .then(res => {
                if (res["data"]["message"]) {
                    alert("Successfully registered")
                    this.props.registerInfo()
                }
                else {
                    alert("Email already exists.Please Login in")
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <form className="my-3 border border-dark p-5"> 
                        <label className="ml-5 text-danger"><h3>Sign up</h3></label><br></br>
                        <label>Name</label><br></br>
                        <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Name"></input><br></br>
                        <label>Email</label><br></br>
                        <input type="text" name="email" onChange={this.handleChange} placeholder="Enter Email"></input><br></br>
                        <label>Phone</label><br></br>
                        <input type="text" name="phone" onChange={this.handleChange}  placeholder="Enter Phone No"></input><br></br>
                        <label>Password</label><br></br>
                        <input type="password" name="password" onChange={this.handleChange}  placeholder="Enter password"></input><br></br>
                        <button type="submit" className="btn btn-primary ml-5 mt-3" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </>
        )
    }
}

export default connect(null,{registerInfo})(SignUp)
