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
            console.log(action.payload.name)
            return State.rooms && State.rooms.length > 0
                ? {
                    ...State,
                    rooms: [...State.rooms, new Room(action.payload.name, [])]
                }
                :State;

        case(RoomActions.UPDATE_ROOM):
            const room = State.rooms[action.payload.index];
            const updatedRoom = {
                ...room,
                ...action.payload.updatedRoom
            };
            const rooms = [...State.rooms];
            rooms[action.payload.index] = updatedRoom;
            console.log(rooms)
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
        
            // !!! Need to fix this still
            // fixed it but it's not uniform and kinda ugly...
            // make it run before you make it look good I guess
        case(RoomActions.ADD_LIGHT):
            console.log(action.payload.roomIndex)
            return State.rooms && State.rooms.length > 0
                ? {
                    ...State,
                    rooms: State.rooms.map((room, index) => index === action.payload.roomIndex
                        ? {
                            ...room,
                            lights: [...room.lights, new Light(action.payload.light.name, action.payload.light.description, {on: false, brightness: 1})]
                        }
                        :room
                    )
                }
                :State;

        case(RoomActions.UPDATE_LIGHT):
                const light = State.rooms[action.payload.roomIndex].lights[action.payload.lightIndex];
                const updatedLight = {
                    ...light,
                    ...action.payload.updatedLight
                };
                const lights = [...State.rooms[action.payload.roomIndex].lights];
                lights[action.payload.lightIndex] = updatedLight;

                return State.rooms && State.rooms.length > 0
                    ? {
                        ...State,
                        rooms: State.rooms.map((room, index) => index === action.payload.roomIndex
                            ? {
                                ...room,
                                lights: lights
                            }
                            :room
                        )
                    }
                    :State;

            // need to test this!!!
            // worked without modification!!!!!!!!!
        case(RoomActions.DELETE_LIGHT):
                const oldLights = [...State.rooms[action.payload.roomIndex].lights]
                oldLights.splice(action.payload.lightIndex, 1);

                return State.rooms && State.rooms.length > 0
                    ? {
                        ...State,
                        rooms: State.rooms.map((room, index) => index === action.payload.roomIndex
                            ?{
                                ...room,
                                lights: oldLights
                            }
                            :room
                        )
                    }
                    :State;
            

      


        default:
            return State;
    }
}