import React from 'react'
import { Link } from "react-router-dom"
import {logout} from "../redux/action"
import {connect} from "react-redux"

function Navbar (props){
        return (
            <React.Fragment>
                <nav>
                    <ul className="d-flex justify-content-between navbar navbar-dark bg-dark">
                        <li className="page-item list-inline-item"><Link to="/home"><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmuzIlo2pAYnsJgSx0VlkO4IJ8776q2SjCr3B0IR_KhWt51fXK&usqp=CAU`} style={{"height":"40px"}} alt="Logo"></img></Link></li>
                        <li className="page-item list-inline-item lead text-white"><Link  to="/home" className="text-white" style={{"textDecoration":"none"}}>FootBall League</Link></li>
                        <li className="page-item list-inline-item"><button className="btn btn-outline-light" onClick={()=>props.logout()}>Logout</button></li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }

export default connect(null,{logout})(Navbar)