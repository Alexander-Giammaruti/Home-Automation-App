

import { MyWindow } from 'src/app/home-security/shared/window.model';

import * as fromApp from '../../../../store/app.reducers';
import * as WindowActions from './window.actions';


export interface FeatureState extends fromApp.AppState {}

export interface State {
    windows: MyWindow[];
}

const initialState: State = {
    windows: [
        new MyWindow('a sample window', false, null),
        new MyWindow('a second sample window', true, null)
    ]
}

export function WindowReducer(state = initialState, action: WindowActions.WindowActions) {
    switch(action.type) {
        case(WindowActions.SET_WINDOWS):
        return{
            ...state,
            Windows: [...action.payload]
        };
    case(WindowActions.ADD_WINDOW):
        return {
            ...state,
            Windows: [...state.windows, action.payload]
        }
    case(WindowActions.UPDATE_WINDOW):
        const Window = state.windows[action.payload.index]
        const updatedWindow = {
            ...Window,
            ...action.payload.updatedWindow
        };
        const Windows = [...state.windows];
        Windows[action.payload.index] = updatedWindow;
        return {
            ...state,
            Windows: Windows
        }
    case(WindowActions.DELETE_WINDOW):
        const oldWindows = [...state.windows];
        oldWindows.splice[action.payload, 1];
        return{
            ...state,
            Windows: oldWindows
        }
    default:
        return state;
    }
}