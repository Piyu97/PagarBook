import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

class CreateTeams extends Component {
    render() {
        let { teams } = this.props
        return (
            <div>
<div className="text-center mt-4 rounded-pill border border-warning  shadow-lg p-1 bg-white rounded">Teams Associated</div>                {teams && teams.map((item, i) =>
                    <div key={item.id} className="col-lg-12 col-md-12 col-sm-12 mt-3 d-flex justify-content-center">
                        <div className=" border border-info shadow p-1  bg-white rounded d-flex justify-content-between">
                            <h5 className="text-center mt-2">{item.name}</h5>
                            <button className="btn btn-primary ml-4"><Link to={`/team/${item.id}`} className="text-white" style={{ "textDecoration": "none" }}><span>&#x2192;</span></Link></button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    teams: state.teams,
})

export default connect(mapStateToProps)(CreateTeams)
