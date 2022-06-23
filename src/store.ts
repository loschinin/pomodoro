import {ActionCreator, AnyAction, Reducer} from "redux";
import {
    IUserData,
    ME_REQUEST,
    ME_REQUEST_ERROR,
    ME_REQUEST_SUCCESS,
    MeRequestAction,
    MeRequestErrorAction,
    MeRequestSuccessAction
} from "./actions";

const UPDATE_COMMENT = 'UPDATE_COMMENT'
const SET_TOKEN = 'SET_TOKEN'

export type RootState = {
    headerTitle: string;
    commentTitle: string;
    token: string;
    me: {
        loading: boolean,
        error: string,
        data: IUserData
    }
}

const initialState: RootState = {
    headerTitle: 'Hello React and Redux',
    commentTitle: '',
    token: '',
    me: {
        loading: true,
        error: '',
        data: {}
    }
}

type MeState = {
    loading: boolean
    error: string
    data: IUserData
};

type MeActions = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction;

// @ts-ignore
const meReducer: Reducer<MeState, MeActions> = (state: MeState, action) => {
    console.log('action type', action.type)
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ME_REQUEST_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false

            }
            case ME_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false

            }
        default:
            return state;
    }
}

type UpdateCommentAction = any
type SetTokenAction = any

type MyAction = UpdateCommentAction | SetTokenAction | MeActions;
export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentTitle: action.text
            }
        case SET_TOKEN:
            console.log('action store:', action.token)
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: state.me && meReducer(state.me, action)
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