import {FETCH_USER, USER, ERROR, LOADING} from '../typeaction'
export const fetchUser = () => {
    return async (dispatch) => {
        try {
            let user  = {
                name: "someone"
            }
            dispatch({
                type: FETCH_USER,
                payload: user
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: true
            })
        } finally {
            dispatch({
                type: LOADING,
                payload: false
            })
        }
    }
}