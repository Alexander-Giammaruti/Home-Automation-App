import { Action } from '@ngrx/store';
import { Room } from '../room.model';
import { Light } from '../light.model';

//whole rooms

export const SET_ROOMS = 'SET_ROOMS';
export const ADD_ROOM = 'ADD_ROOM';
export const UPDATE_ROOM = 'UPDATE_ROOM';
export const DELETE_ROOM = 'DELETE_ROOM';
export const GET_ROOMS = 'GET_ROOMS';
export const STORE_ROOMS = 'STORE_ROOMS';

//lights
export const TOGGLE_POWER = 'TOGGLE_POWER';
export const ADD_LIGHT = 'ADD_LIGHT';
export const UPDATE_LIGHT = 'UPDATE_LIGHT';
export const DELETE_LIGHT = 'DELETE_LIGHT';

//whole rooms
export class SetRooms implements Action {
    readonly type = SET_ROOMS;

    constructor(public payload: Room[]) {}
}

export class AddRoom implements Action {
    readonly type = ADD_ROOM;

    constructor(public payload: Room) {}
}

export class UpdateRoom implements Action {
    readonly type = UPDATE_ROOM;

    constructor(public payload: {index: number, updatedRoom: Room[]}) {}
}

export class DeleteRoom implements Action {
    readonly type = DELETE_ROOM;

    constructor(public payload: number) {}
}

export class GetRooms implements Action {
    readonly type = GET_ROOMS;
}

export class StoreRooms implements Action {
    readonly type = STORE_ROOMS;
}

//lights
export class TogglePower implements Action {
    readonly type = TOGGLE_POWER;

    constructor(public payload: {roomIndex: number, lightIndex: number}) {}
}

export class AddLight implements Action {
    readonly type = ADD_LIGHT;

    constructor(public payload: {roomIndex: number, light: Light}) {}
}

export class UpdateLight implements Action {
    readonly type = UPDATE_LIGHT;

    constructor(public payload: {roomIndex: number, lightIndex: number, updatedLight: Light[]}) {}
}

export class DeleteLight implements Action {
    readonly type = DELETE_LIGHT;

    constructor(public payload: {roomIndex: number, lightIndex: number}) {}
}

export type RoomActions = 
    SetRooms |
    AddRoom |
    UpdateRoom |
    DeleteRoom |
    GetRooms |
    StoreRooms |
    TogglePower |
    AddLight |
    UpdateLight |
    DeleteLight;