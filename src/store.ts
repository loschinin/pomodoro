import {ActionCreator, AnyAction, Reducer} from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export type RootState = {
    headerTitle: string;
    commentTitle: string;
    token: string;
}

const initialState: RootState = {
    headerTitle: 'Hello React and Redux',
    commentTitle: 'Hello skill',
    token: ''
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentTitle: action.text
            }
        case SET_TOKEN:
            console.log('action:', action.token)
            return {
                ...state,
                setToken: action.token
            }
        default:
            return state
    }
}



export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
})

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
})