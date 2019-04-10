import { Action } from '@ngrx/store';
import { Lock } from 'src/app/home-security/shared/lock.model';


export const SET_LOCKS = 'SET_LOCKS';
export const ADD_LOCK = 'ADD_LOCK';
export const UPDATE_LOCK = 'UPDATE_LOCK';
export const DELETE_LOCK = 'DELETE_LOCK';

export class SetLocks implements Action {
    readonly type = SET_LOCKS;

    constructor(public payload: Lock[]) {}
}

export class AddLock implements Action {
    readonly type = ADD_LOCK;

    constructor(public payload: Lock[]) {}
}

export class UpdateLock implements Action {
    readonly type = UPDATE_LOCK;

    constructor(public payload: {index: number , updatedLock: Lock[]}) {}
}

export class DeleteLock implements Action {
    readonly type = DELETE_LOCK;

    constructor(public payload: number) {}
}

export type LockActions = 
    SetLocks |
    AddLock |
    UpdateLock |
    DeleteLock;