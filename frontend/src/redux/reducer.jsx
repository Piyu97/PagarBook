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

const initialState = {
    loading: true,
    err: "",
    status: false,
    token: null || localStorage.getItem("token"),
    competitions: [],
    teams: [],
    getTeam: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_INFO:
            return {
                ...state,
                status: true,
            }

        case LOADING:
            return {
                ...state,
                loading: true
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

        case STORE_TEAMS:
            return {
                ...state,
                loading: false,
                teams: action.payload,
                getTeam: true
            }

        case NO_TEAMS:
            return {
                ...state,
                err: action.payload
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