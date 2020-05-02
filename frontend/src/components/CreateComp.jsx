import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CreateComp extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { competitions } = this.props
        return (
            <React.Fragment>
                {competitions && competitions.map((item, i) => 
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                        <div className="p-3 border border-danger">
                            <img src={item.image_url} alt="competition image" className="imageSize"/>
                            <h3>{item.name}</h3>
                            <div class="d-flex justify-content-between">
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    competitions: state.competitions
})

const mapDispatchToProps = dispatch => {
    return ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateComp)
