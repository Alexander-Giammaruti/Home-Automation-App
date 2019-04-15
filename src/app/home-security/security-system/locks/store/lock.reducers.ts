
import { Lock } from 'src/app/home-security/shared/lock.model';

import * as fromApp from '../../../../store/app.reducers';
import * as LockActions from './lock.actions';

export interface FeatureState extends fromApp.AppState {}

export interface State {
    locks: Lock[];
}

const initialState: State = {
    locks: [
        new Lock('A sample lock', false, null),
        new Lock('A second sample lock', true, null)
    ]
}

export function LockReducer(state = initialState, action: LockActions.LockActions) {
    switch(action.type) {
        case(LockActions.SET_LOCKS):
            return{
                ...state,
                locks: [...action.payload]
            };
        case(LockActions.ADD_LOCK):
            return {
                ...state,
                locks: [...state.locks, action.payload]
            }
        case(LockActions.UPDATE_LOCK):
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
        case(LockActions.DELETE_LOCK):
            const oldLocks = [...state.locks];
            oldLocks.splice(action.payload, 1);

            return{
                ...state,
                locks: oldLocks
            }
        case(LockActions.LOCK_LOCK):
            state.locks[action.payload].lockedState = !state.locks[action.payload].lockedState
            return{
                ...state
            }
        default:
            return state;
    }
}