import React from 'react'
import { connect } from 'react-redux'
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {sign} from "../redux/action"
import {Redirect} from "react-router-dom"

function Login(props){
    let token=props.token
    
    // checking if user is already logged in
    if(token){
       return  <Redirect to="/home"/>
    }
        return (
            <React.Fragment>
                <h3 className="text-center my-5">Enter Details to register or press<button className="mx-3 btn btn-danger" onClick={()=>props.sign()}>Sign in</button>to Sign In.</h3>
                {props.status?<SignIn/>:<SignUp/>}
            </React.Fragment>
        )
    }


const mapStateToProps = (state) => ({
    status:state.status,
    token:state.token
})

export default connect(mapStateToProps,{sign})(Login)
