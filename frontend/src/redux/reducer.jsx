import {
    STORE_DATA,
    NO_DATA,
    LOADING,
    REGISTER_INFO,
    SIGN,
    GET_DATA,
    LOGOUT
} from "./action_types"

const initialState = {
    loading: true,
    status: false,
    email: "",
    password: "",
    token: null || localStorage.getItem("token"),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_INFO:
            return {
                ...state,
                status: true,
                email: action.payload.email,
                password: action.payload.password
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case STORE_DATA:
            localStorage.setItem("token", action.payload.token)
            return {
                ...state,
                loading: false,
                token: JSON.stringify(action.payload.token),
            }

        case NO_DATA:
            return {
                ...state,
                loading: false,
            }

        case SIGN:
            return {
                ...state,
                status: true
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                status: false,
                token: null
            }

        default:
            return state
    }
}
export default reducer