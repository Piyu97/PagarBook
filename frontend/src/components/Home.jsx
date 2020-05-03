import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { getData } from "../redux/action"
import CreateComp from "./CreateComp"
import CreateTeams from './CreateTeams'

class Home extends Component {
    componentDidMount = () => {
        this.props.getData()
    }
    render() {
        let { loading, getTeam, token } = this.props
        if (token) {
            return loading ? (
                <>
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </>
            ) :
                (
                    <>
                        <h2 className="text-center my-2 rounded-pill  shadow-lg p-1 mb-5 bg-white rounded border border-warning">Welcome to FootBall Champion League</h2>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12 border border-dark">
                                    <h3 className="text-center mt-4 rounded-pill border border-warning  shadow-lg p-1 bg-white rounded">Competitions</h3>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <CreateComp />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 border border-dark">
                                    {getTeam ? <CreateTeams /> : <div className="text-center mt-4 rounded-pill border border-warning  shadow-lg p-1 bg-white rounded">Teams Associated</div>}
                                </div>
                            </div>
                        </div>
                    </>
                )
        }
        return (
            <Redirect to="/" />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    teams: state.teams,
    getTeam: state.getTeam,
    token: state.token
})

export default connect(mapStateToProps, { getData })(Home)



