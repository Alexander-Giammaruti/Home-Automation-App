import { Action } from '@ngrx/store'
import { Light } from '../light.model';

export const TOGGLE_POWER = 'TOGGLE_POWER';
export const SET_LIGHTS = 'SET_LIGHTS';
export const ADD_LIGHT = 'ADD_LIGHT';
export const UPDATE_LIGHT = 'UPDATE_LIGHT';
export const DELETE_LIGHT = 'DELETE_LIGHT';
export const GET_LIGHTS = 'GET_LIGHTS';
export const STORE_LIGHTS = 'STORE_LIGHTS';
// to be added... database compatability with an effects module...
//done


export class TogglePower implements Action {
    readonly type = TOGGLE_POWER;

    constructor(public payload: number) {}
}

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

export class GetLights implements Action {
    readonly type = GET_LIGHTS;
}

export class StoreLights implements Action {
    readonly type = STORE_LIGHTS;
}

export type LightActions = 
    TogglePower |
    SetLights |
    AddLight |
    UpdateLight |
    DeleteLight |
    GetLights |
    StoreLights;