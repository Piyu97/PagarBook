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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <CreateComp />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    {getTeam ? <CreateTeams /> : <div></div>}
                                </div>
                            </div>
                        </div>
                    </>
                )
        }
        return (
            <Redirect to="/login" />
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



