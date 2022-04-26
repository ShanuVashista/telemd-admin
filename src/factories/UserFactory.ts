import {$crud} from "./CrudFactory";
import {LoginResponseType, UserType} from "../types";
import {useSelector} from "react-redux";
import {AppStateType, SET_USER, store} from "../store";

export interface LoginParams {
    email?: string
    password?: string
}

export class UserFactory {

    constructor() {
        const user = this.get();
        store.dispatch({
            type: SET_USER,
            user: user?.data
        })
    }

    async login(params: LoginParams) {
        this.setToken(btoa(`${params.email}:${params.password}`));
        const {data} = await $crud.post("user/login", params);
        // console.log(data)
        this.set(data);
    }

    async logout() {
        this.removeToken();
        this.remove();
    }

    async current(): Promise<UserType> {
        return this.get().data;
    }

    rememberCredentials(credentials: LoginParams) {
        localStorage.setItem("cred", btoa(JSON.stringify(credentials)));
    }

    forgetCredentials() {
        localStorage.removeItem("cred");
    }

    getRememberedCredentials(): LoginParams {
        try {
            return JSON.parse(atob(localStorage.getItem("cred")));
        } catch (e) {
            return null;
        }
    }

    set(user: LoginResponseType) {
        localStorage.setItem("user", btoa(JSON.stringify(user)));
        store.dispatch({
            type: SET_USER,
            user: user.data
        })
    }

    get(): LoginResponseType {
        try {
            return JSON.parse(atob(localStorage.getItem("user")));
        } catch (e) {
            console.warn(e);
            return null;
        }
    }

    setToken(token) {
        localStorage.setItem("login_token", token);
    }

    removeToken() {
        localStorage.removeItem("login_token");
    }

    getToken() {
        return localStorage.getItem("login_token");
    }

    remove() {
        localStorage.removeItem("user");
        store.dispatch({
            type: SET_USER,
            user: null
        })
    }
}

export const $user = new UserFactory();

export function useCurrentUser() {
    return useSelector<AppStateType, UserType>(state => state.user);
}
