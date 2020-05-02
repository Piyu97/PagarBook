import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

 class CreateTeams extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.teams)
        let { teams } = this.props
        return (
            <div>
                <h4 className="text-center">Teams Associated are</h4>
                {teams && teams.map((item, i) =>
                    <div key={item.id} className="col-lg-12 col-md-12 col-sm-12 mt-3 d-flex justify-content-center">
                        <div className="p-3 border border-info">
                        <img src={item.photo_url} className="imageSizeTeam" />
                        <h3 className="text-center mt-2">{item.name}</h3>
                        <button className="btn btn-primary ml-4"><Link to={`/team/${item.id}`} className="text-white" style={{"textDecoration":"none"}}>Get Details</Link></button>
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

const mapDispatchToProps =dispatch=> {

}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTeams)
