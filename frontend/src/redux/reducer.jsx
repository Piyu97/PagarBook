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

const initialState = {
    loading: true,
    err: "",
    status: false,
    email: "",
    password: "",
    token: null || localStorage.getItem("token"),
    competitions: []
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
        case STORE_COMP:
            return {
                ...state,
                loading: false,
                competitions: action.payload
            }
        case NO_COMP:
            return {
                ...state,
                loading: false,
                err: action.payload
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