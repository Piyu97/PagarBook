import React from 'react'
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <nav>
                    <ul className="d-flex justify-content-between navbar navbar-dark bg-dark">
                        <li className="page-item list-inline-item"><Link to="/home"><img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmuzIlo2pAYnsJgSx0VlkO4IJ8776q2SjCr3B0IR_KhWt51fXK&usqp=CAU`} style={{"height":"40px"}}></img></Link></li>
                        <li className="page-item list-inline-item lead text-white"><Link  to="/home" className="text-white" style={{"textDecoration":"none"}}>PagarBook</Link></li>
                        <li className="page-item list-inline-item"><button className="btn btn-outline-light">Logout</button></li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar