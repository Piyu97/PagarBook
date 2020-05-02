import React from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "../components/NavBar"
import Login from "../components/Login"
import Home from "../components/Home"
import Team from "../components/Team"
import NotFound from "../components/NotFound"

function Routes() {
    return (
        <React.Fragment>
            <NavBar />
            <Switch>
                <Route path="/login" render={(props) => <Login {...props} />}></Route>
                <Route path="/home" render={(props) => <Home {...props} />}></Route>
                <Route path="/team/:id" render={(props) => <Team {...props} />}></Route>
                <Route path component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default Routes