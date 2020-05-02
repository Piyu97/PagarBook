import React from "react";

function NotFound() {
    return (
        <React.Fragment>
            <h1 className="text-center mt-5">404 PAGE NOT FOUND</h1>
        </React.Fragment>
    )
}
export default NotFound


// await axios({
//     method: 'get',
//     url: `http://127.0.0.1:5000/task/oneTasklist/${this.props.match.params.id}`,
//     headers: { 'Authorization': `Bearer ${token}` }
// })
//     .then(res => this.setState({
//         tasklists: res.data.items[0]["name"]
//     }))