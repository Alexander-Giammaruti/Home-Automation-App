import { Action } from '@ngrx/store';
import { Lock } from 'src/app/home-security/shared/lock.model';
import { MyWindow } from 'src/app/home-security/shared/window.model';
import { SecuritySystem } from '../security-system.model';

export const ARM_SYSTEM = 'ARM_SYSTEM';
export const SET_SYSTEM = 'SET_SYSTEM';
export const SET_LOCKS = 'SET_LOCKS';
export const ADD_LOCK = 'ADD_LOCK';
export const UPDATE_LOCK = 'UPDATE_LOCK';
export const DELETE_LOCK = 'DELETE_LOCK';
export const LOCK_LOCK = 'LOCK_LOCK';
export const SET_WINDOWS = 'SET_WINDOWS';
export const ADD_WINDOW = 'ADD_WINDOW';
export const UPDATE_WINDOW = 'UPDATE_WINDOW';
export const DELETE_WINDOW = 'DELETE_WINDOW';
export const LOCK_WINDOW = 'LOCK_WINDOW';
export const GET_SECURITY_SYSTEM = 'GET_SECURITY_SYSTEM';
export const STORE_SECURITY_SYSTEM = 'STORE_SECURITY_SYSTEM';

export class ArmSystem implements Action {
    readonly type = ARM_SYSTEM;

    constructor(public payload: {instantArm: boolean, motionSensors: boolean}) {}
}

export class SetSystem implements Action {
    readonly type = SET_SYSTEM;

    constructor(public payload: SecuritySystem) {}
}

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

export class LockLock implements Action {
    readonly type = LOCK_LOCK;

    constructor(public payload: number) {}
}

export class SetWindows implements Action {
    readonly type = SET_WINDOWS;

    constructor(public payload: MyWindow[]) {}
}

export class AddWindow implements Action {
    readonly type = ADD_WINDOW;

    constructor(public payload: MyWindow[]) {}
}

export class UpdateWindow implements Action {
    readonly type = UPDATE_WINDOW;

    constructor(public payload: {index: number , updatedWindow: MyWindow[]}) {}
}

export class DeleteWindow implements Action {
    readonly type = DELETE_WINDOW;

    constructor(public payload: number) {}
}

export class LockWindow implements Action {
    readonly type = LOCK_WINDOW;

    constructor(public payload: number) {}
}

export class GetSecuritySystem implements Action {
    readonly type = GET_SECURITY_SYSTEM;
}

export class StoreSecuritySystem implements Action {
    readonly type = STORE_SECURITY_SYSTEM;
}

export type SecuritySystemActions = 
    ArmSystem |
    SetSystem |
    SetLocks |
    AddLock |
    UpdateLock |
    DeleteLock |
    LockLock |
    SetWindows |
    AddWindow |
    UpdateWindow |
    DeleteWindow |
    LockWindow;