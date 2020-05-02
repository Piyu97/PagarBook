import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from "axios"
import { registerInfo } from "../redux/action"
export class SignUp extends Component {
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
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
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
                    this.props.registerInfo(details)
                }
                else {
                    alert("Email already exists.Please Login in")
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center">
                    <form>
                        <label><h3>Sign up</h3></label><br></br>
                        <label>Name</label><br></br>
                        <input type="text" name="name" onChange={this.handleChange}></input><br></br>
                        <label>Email</label><br></br>
                        <input type="text" name="email" onChange={this.handleChange}></input><br></br>
                        <label>Phone</label><br></br>
                        <input type="text" name="phone" onChange={this.handleChange}></input><br></br>
                        <label>Password</label><br></br>
                        <input type="password" name="password" onChange={this.handleChange}></input><br></br>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return ({
        registerInfo: (payload) => dispatch(registerInfo(payload))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
