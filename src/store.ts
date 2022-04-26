import {createStore} from "redux";
import {UserType} from "./types";

export interface AppStateType {
    user?: UserType
}

const initialState: AppStateType = {
    user: null
};

export const store = createStore((state: AppStateType = initialState, action: any): AppStateType => {
    const {type} = action;
    switch (type) {

        case SET_USER:
            return {...state, user: action.user};

        default:
            return state;
    }
});

export const SET_USER = Symbol("SET_USER");
