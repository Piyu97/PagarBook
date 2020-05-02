import axios from "axios";
import {
    STORE_DATA,
    NO_DATA,
    LOADING,
    REGISTER_INFO,
    SIGN,
    LOGOUT,
    STORE_COMP,
    NO_COMP,
    STORE_TEAMS,
    NO_TEAMS
} from "./action_types"


const registerInfo = () => {
    return {
        type: REGISTER_INFO,
    }
}

const loading = () => {
    return {
        type: LOADING,
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

const sign = () => {
    return {
        type: SIGN
    }
}


const signin = (payload) => {
    return dispatch => {
        return axios({
            method: 'post',
            url: "http://127.0.0.1:5000/auth/login",
            data: {
                email: payload.email,
                password: payload.password,
            }
        })
        .then(res => dispatch(storeData(res)))
        .catch(err => dispatch(noData()))
    }
}

const storeData = (payload) => {
    console.log(payload)
    return {
        type: STORE_DATA,
        payload: payload.data
    }

}
const noData = () => {
    return {
        type: NO_DATA,
    }
}

const getData = () => {
    let token = localStorage.getItem("token")
    return dispatch => {
        dispatch(loading())
        return axios({
            method: "GET",
            url: "http://127.0.0.1:5000/competitions",
            headers: { 'Authorization': `Bearer ${token}` }

        })
        .then(res =>dispatch(storeComp(res.data)))
        .catch(err => dispatch(noComp(err)))
    }
}

const storeComp = (payload) => {
    return {
        type: STORE_COMP,
        payload
    }
}

const noComp = (payload) => {
    return {
        type: NO_COMP,
        payload
    }
}

const teams = (idx) => {
    let token = localStorage.getItem("token")
    return async dispatch => {
        dispatch(loading())
        return await axios({
            method: "GET",
            url: `http://127.0.0.1:5000/teams/${idx}`,
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => dispatch(storeTeams(res.data)))
            .catch(err => dispatch(noTeams(err)))
    }
}

const storeTeams = (payload) => {
    console.log(payload)
    return {
        type: STORE_TEAMS,
        payload: payload
    }

}
const noTeams = (payload) => {
    return {
        type: NO_TEAMS,
        payload
    }
}


export { getData, storeTeams, teams, noTeams, logout, storeComp, noComp, registerInfo, signin, sign, loading, storeData, noData }