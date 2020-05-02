import React, { Component } from 'react'
import { connect } from 'react-redux'
import { teams } from "../redux/action"

class CreateComp extends Component {
    render() {
        let { competitions } = this.props
        return (
            <>
                {competitions && competitions.map((item, i) =>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5" onClick={() => this.props.teams(item.id)} key={item.id}>
                        <div className="p-3 border border-danger">
                            <img src={item.image_url} alt="competition" className="imageSize" />
                            <h4>{item.name}</h4>
                            <div className="d-flex justify-content-between">
                                <div className="lead">Host -</div>
                                <div>{item.host}</div>
                            </div>
                            <div>
                                <div className="lead">Start Date -</div>
                                <div>{item.start_date}</div>
                            </div>
                            <div>
                                <div className="lead">End Date -</div>
                                <div>{item.end_date}</div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions
})

const mapDispatchToProps = dispatch => {
    return ({
        teams: (idx) => dispatch(teams(idx))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComp)
