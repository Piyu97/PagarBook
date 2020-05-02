import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {sign} from "../redux/action"

function Login(props){
        return (
            <React.Fragment>
                <h3 className="text-center my-5">Enter Details to register or press<button className="mx-3 btn btn-danger" onClick={()=>props.sign()}>Sign in</button>to Sign In.</h3>
                {props.status?<SignIn/>:<SignUp/>}
            </React.Fragment>
        )
    }


const mapStateToProps = (state) => ({
    status:state.status
})

const mapDispatchToProps =dispatch=> {
    return({
        sign:()=>dispatch(sign())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
