import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import { getData } from "../redux/action"

class Home extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount = () => {
        this.props.getData()
    }
    render() {
        let { loading } = this.props
        var loggedIn = localStorage.getItem("token")
        if (loggedIn) {
            return loading ? (
                <React.Fragment >
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </React.Fragment >
            ) :
                (
                    <React.Fragment>
                        <div className="container-fluid">
                            <div className="row">
                                
                            </div>
                        </div>
                    </React.Fragment>
                )
        }
        return (
            <Redirect to="/login" />
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loading
})

const mapDispatchToProps = dispatch => {
    return ({
        getData: () => dispatch(getData())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)



