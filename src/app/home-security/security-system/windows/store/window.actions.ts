import { Action } from '@ngrx/store';
import { MyWindow } from 'src/app/home-security/shared/window.model';


export const SET_WINDOWS = 'SET_WINDOWS';
export const ADD_WINDOW = 'ADD_WINDOW';
export const UPDATE_WINDOW = 'UPDATE_WINDOW';
export const DELETE_WINDOW = 'DELETE_LOCK';

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

export type WindowActions = 
    SetWindows |
    AddWindow |
    UpdateWindow |
    DeleteWindow;