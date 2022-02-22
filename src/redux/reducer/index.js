import { USER, FETCH_USER, LOADING, ERROR } from "../typeaction";

const initialState = {
    user: {},
    loadingUser: true,
    errorUser: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER :
            return {...state, user: action.payload}
        case LOADING:
            return { ...state, loadingUser: action.payload }
        case ERROR:
            return { ...state, errorUser: action.payload }
        default:
            return state
    }
}

export default reducer