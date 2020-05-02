import axios from "axios";
import {
    STORE_DATA,
    NO_DATA,
    LOADING,
    REGISTER_INFO,
    SIGN,
    GET_DATA,
    LOGOUT,
} from "./action_types"


const registerInfo = (paylaod) => {
    return {
        type: REGISTER_INFO,
        payload:paylaod
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

const sign=()=>{
    return {
        type:SIGN
    }
}

const getData=()=>{
    let token=localStorage.getItem("token")
    // console.log(token)
    // console.log(token.replace('"',''))
    return dispatch=>{
        dispatch(loading())
        return axios({
            method:"GET",
            url:"http://127.0.0.1:5000/competitions",
            headers: { 'Authorization': `Bearer ${token}` }

        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
}

const logout=()=>{
    return{
        type:LOGOUT
    }
}

export { getData,logout, registerInfo,signin,sign, loading, storeData, noData }