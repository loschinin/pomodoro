import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState, setToken} from "./store";
import axios from "axios";

export const ME_REQUEST = 'ME_REQUEST'
export type MeRequestAction = {
    type: typeof ME_REQUEST
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export type IUserData = {
    name?: string;
    iconImg?: string;
}

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS,
    data: IUserData
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data,
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR,
    error: string
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error,
})

export const saveToken = ():ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(setToken(window.__token__))
    const { token } = getState()
    axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}`}
    })
        .then(({data}) => {
            dispatch(meRequestSuccess(data))
        })
        .catch(err => {
            console.log(err)
            dispatch(meRequestError(`${err}`))
        })

    console.log('save token',  token);
}

export const meRequestAsync = () => (dispatch: any): any => {
        dispatch(meRequest())
}