import React, { Component } from 'react'
import { connect } from 'react-redux'
import {signin} from "../redux/action"

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
        let detail=this.state
        e.preventDefault()
        this.props.signin(detail)
    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <label>Sign in</label><br></br>
                    <label>Email</label><br></br>
                    <input type="text" name="email" onChange={this.handleChange}></input><br></br>
                    <label>Password</label><br></br>
                    <input type="password" name="password" onChange={this.handleChange}></input><br></br>
                    <button className="btn btn-success"type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch=>{
return({
    signin:(payload)=>dispatch(signin(payload))
})
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
