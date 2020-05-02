import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signin } from "../redux/action"

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        let detail = this.state
        e.preventDefault()
        this.props.signin(detail)
    }
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                <form>
                    <label className="lead ml-5"><h3>Sign in</h3></label><br></br>
                    <label>Email</label><br></br>
                    <input type="text" name="email" onChange={this.handleChange}></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" onChange={this.handleChange}></input><br></br>
                    <button className="btn btn-success ml-5 mt-3" type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        signin: (payload) => dispatch(signin(payload))
    })
}

export default connect(null, mapDispatchToProps)(SignIn)
