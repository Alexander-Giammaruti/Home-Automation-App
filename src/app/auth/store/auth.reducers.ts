import * as AuthActions from './auth.actions';

import * as firebase from 'firebase/app';
import 'firebase/auth';

export interface State {
    token: string;
    authenticated: boolean;
    userId: string;
}

const initialState: State = {
    token: null,
    authenticated: false,
    userId: null
};

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
    switch(action.type) {
        case(AuthActions.SIGNUP):
        case(AuthActions.SIGNIN):
            return {
                ...state,
                authenticated: true
            };

        case(AuthActions.LOGOUT):
            return {
                ...state,
                token: null,
                authenticated: false
            };

        case(AuthActions.SET_TOKEN):
            return {
                ...state,
                token: action.payload
            };

        case(AuthActions.SET_UID):
            return {
                ...state,
                userId: action.payload
            }

        default:
            return state;
    }
}