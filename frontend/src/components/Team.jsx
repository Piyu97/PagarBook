import React, { Component } from 'react'
import axios from "axios"

export class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: "",
            email: "",
            founded: "",
            name: "",
            phone: 0,
            photo_url: "",
            website: ""
        }
    }
    componentDidMount = () => {
        let token = localStorage.getItem('token')
        let idx = this.props.match.params.id
        axios({
            method: "GET",
            url: `http://127.0.0.1:5000/team/${idx}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => {
                let data = res["data"][0]
                this.setState({
                    address: data.address,
                    email: data.email,
                    founded: data.founded,
                    name: data.name,
                    phone: data.phone,
                    photo_url: data.photo_url,
                    website: data.website
                })
            })
            .catch(err =>console.log(err))
    }
    render() {
        let team = this.state
        return (
            <>
                <button onClick={() => this.props.history.goBack()} className="mt-2 mx-5 btn btn-secondary">GoBack</button>

                <div className="d-flex justify-content-center ">
                    <div className="shadow-lg p-1  bg-white rounded border border-warning p-4">
                        <img src={team.photo_url} alt="team" className="imageSize" />
                        <h3 className="text-center my-4">{team.name}</h3>
                        <div className="d-flex justify-content-between my-2">
                            <div className="lead">Founded</div>
                            <div>{team.founded}</div>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div className="lead">Address</div>
                            <div>{team.address}</div>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div className="lead">Email</div>
                            <div><a href={`mailto:${team.email}`}>{team.email}</a></div>
                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div className="lead">Website</div>
                            <div><a href={team.website}>{team.website}</a></div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Team
