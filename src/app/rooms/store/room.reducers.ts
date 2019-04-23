import * as fromApp from '../../store/app.reducers';
import * as RoomActions from './room.actions';
import { Room } from '../room.model';
import { Light } from 'src/app/lights/light.model';

export interface FeatureState extends fromApp.AppState {}

export interface State {
    rooms: Room[];
}

const initialState: State = {
    rooms: [
        new Room('Sample Living Room', [
            new Light('A sample light', 'This light is to show a sample of how "our product" works', {on: false, brightness: 1}),
            new Light('A second sample light', 'This second light is to show a sample of how "our product" works', {on: true, brightness: 8})
        ]),
        new Room('Sample Bedroom', [
            new Light('A third sample light', 'This third light is to show a sample of how "our product" works', {on: false, brightness: 1}),
            new Light('A fourth sample light', 'This fourth light is to show a sample of how "our product" works', {on: false, brightness: 1})
        ]),
    ]
};

export function RoomReducer(State = initialState, action: RoomActions.RoomActions) {
    switch(action.type) {
        
        //whole rooms
        case(RoomActions.SET_ROOMS):
            return {
                ...State,
                rooms: [...action.payload]
            };

        case(RoomActions.ADD_ROOM):
            return {
                ...State,
                rooms: [...State.rooms, action.payload]
            }

        case(RoomActions.UPDATE_ROOM):
            const room = State.rooms[action.payload.index];
            const updatedRoom = {
                ...room,
                ...action.payload.updatedRoom
            };
            const rooms = [...State.rooms];
            rooms[action.payload.index] = updatedRoom;
            return {
                ...State,
                rooms: rooms
            }
        
        case(RoomActions.DELETE_ROOM):
            const oldRooms = [...State.rooms];
            oldRooms.splice(action.payload, 1);

            return {
                ...State,
                rooms: oldRooms
            }

        // lights
        case(RoomActions.TOGGLE_POWER):
            State.rooms[action.payload.roomIndex].lights[action.payload.lightIndex].powered.on = !State.rooms[action.payload.roomIndex].lights[action.payload.lightIndex].powered.on;
            return {
                ...State
            }
        
        case(RoomActions.ADD_LIGHT):
            const lights = State.rooms[action.payload.roomIndex].lights;
            lights[action.payload.lightIndex] = action.payload.light;
            return {
                ...State,
                lights: lights
            }

        default:
            return State;
    }
}