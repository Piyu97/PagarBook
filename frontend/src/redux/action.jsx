import axios from "axios";
import {
    STORE_DATA,
    NO_DATA,
    LOADING,
    REGISTER_INFO,
    SIGN,
    LOGOUT,
    STORE_COMP,
    NO_COMP
} from "./action_types"


const registerInfo = (paylaod) => {
    return {
        type: REGISTER_INFO,
        payload: paylaod
    }
}

const loading = () => {
    return {
        type: LOADING,
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

const sign = () => {
    return {
        type: SIGN
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

const getData = () => {
    let token = localStorage.getItem("token")
    return dispatch => {
        dispatch(loading())
        return axios({
            method: "GET",
            url: "http://127.0.0.1:5000/competitions",
            headers: { 'Authorization': `Bearer ${token}` }

        })
            .then(res => {
                console.log(res)
                dispatch(storeComp(res.data))
            })
            .catch(err => {
                console.log(err)
                dispatch(noComp(err))
            })
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

export { getData, logout, storeComp, noComp, registerInfo, signin, sign, loading, storeData, noData }