import { Lock } from 'src/app/home-security/shared/lock.model';
import { MyWindow } from 'src/app/home-security/shared/window.model';

import * as fromApp from '../../../store/app.reducers';
import * as SecuritySystemActions from '../store/security-system.actions';

export interface FeatureState extends fromApp.AppState {}

export interface State {
    name: string;
    alarmSettings: {
        instantArm: boolean,
        motionSensors: boolean
    };
    armed: boolean;
    locks: Lock[];
    windows: MyWindow[];
}

const initialState: State = {
    name: "Sample Security System",
    alarmSettings: {
        
        instantArm: false,
        motionSensors: false
    },
    armed: false,
    locks: [
        new Lock('A sample lock', false, null),
        new Lock('A second sample lock', true, null)
    ],
    windows: [
        new MyWindow('a sample window', false, null),
        new MyWindow('a second sample window', true, null)
    ]
}

export function SecuritySystemReducer(state = initialState, action: SecuritySystemActions.SecuritySystemActions) {
    switch(action.type) {
        case(SecuritySystemActions.ARM_SYSTEM):
            return{
                ...state,
                armed: true,
                alarmSettings: {
                    instantArm: action.payload.instantArm,
                    motionSensors: action.payload.motionSensors
                }
            }
        case(SecuritySystemActions.DISARM_SYSTEM):
            return {
                ...state,
                armed: false,
                alarmSettings: {
                    instantArm: false,
                    motionSensors: false
                }
            }
        case(SecuritySystemActions.SET_SYSTEM): 
            return {
                ...state,
                ...action.payload
            }
        case(SecuritySystemActions.SET_LOCKS):
            return{
                ...state,
                locks: [...action.payload]
            };
        case(SecuritySystemActions.ADD_LOCK):
            return {
                ...state,
                locks: [...state.locks, action.payload]
            }
        case(SecuritySystemActions.UPDATE_LOCK):
            const lock = state.locks[action.payload.index]
            const updatedLock = {
                ...lock,
                ...action.payload.updatedLock
            };
            const locks = [...state.locks];
            locks[action.payload.index] = updatedLock;
            return {
                ...state,
                locks: locks
            }
        case(SecuritySystemActions.DELETE_LOCK):
            const oldLocks = [...state.locks];
            oldLocks.splice(action.payload, 1);

            return{
                ...state,
                locks: oldLocks
            }
        case(SecuritySystemActions.LOCK_LOCK):
            state.locks[action.payload].lockedState = !state.locks[action.payload].lockedState
            return{
                ...state
            }
            case(SecuritySystemActions.SET_WINDOWS):
            return{
                ...state,
                windows: [...action.payload]
            };
        case(SecuritySystemActions.ADD_WINDOW):
            return {
                ...state,
                windows: [...state.windows, action.payload]
            }
        case(SecuritySystemActions.UPDATE_WINDOW):
            const Window = state.windows[action.payload.index]
            const updatedWindow = {
                ...Window,
                ...action.payload.updatedWindow
            };
            const Windows = [...state.windows];
            Windows[action.payload.index] = updatedWindow;
            return {
                ...state,
                windows: Windows
            }
        case(SecuritySystemActions.DELETE_WINDOW):
            const oldWindows = [...state.windows];
            oldWindows.splice(action.payload, 1);
            return{
                ...state,
                windows: oldWindows
            }
        case(SecuritySystemActions.LOCK_WINDOW):
            state.windows[action.payload].lockedState = !state.windows[action.payload].lockedState
            return{
                ...state
            }
        default:
            return state;
    }
}