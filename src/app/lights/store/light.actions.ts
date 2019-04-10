import { Action } from '@ngrx/store'
import { Light } from '../light.model';

export const SET_LIGHTS = 'SET_LIGHTS';
export const ADD_LIGHT = 'ADD_LIGHT';
export const UPDATE_LIGHT = 'UPDATE_LIGHT';
export const DELETE_LIGHT = 'DELETE_LIGHT';
// to be added... database compatability with an effects module...




export class SetLights implements Action {
    readonly type = SET_LIGHTS;

    constructor(public payload: Light[]) {}
}

export class AddLight implements Action {
    readonly type = ADD_LIGHT;

    constructor(public payload: Light[]) {}
}

export class UpdateLight implements Action {
    readonly type = UPDATE_LIGHT;

    constructor(public payload: {index: number, updatedLight: Light[]}) {}
}

export class DeleteLight implements Action {
    readonly type = DELETE_LIGHT;

    constructor(public payload: number) {}
}

export type LightActions = 
    SetLights |
    AddLight |
    UpdateLight |
    DeleteLight;