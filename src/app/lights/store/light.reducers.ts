
import * as fromApp from '../../store/app.reducers'
import * as LightActions from './light.actions'

import { Light } from '../light.model';

export interface FeatureState extends fromApp.AppState {}
    
export interface State {
    lights: Light[];
}

const initialState: State = {
    lights: [
        new Light('A sample light', 'This light is to show a sample of how "our product" works', {on: false, brightness: 1}),
        new Light('A second sample light', 'This second light is to show a sample of how "our product" works', {on: false, brightness: 1}),

    ]
};

export function LightReducer(State = initialState, action: LightActions.LightActions) {
    switch(action.type) {
        case(LightActions.TOGGLE_POWER):
            
            return {
                ...State
            }

        case(LightActions.SET_LIGHTS):
            return {
                ...State,
                lights: [...action.payload]
            };

        case(LightActions.ADD_LIGHT):
            return{
                ...State,
                lights: [...State.lights, action.payload]
            }
        
        case(LightActions.UPDATE_LIGHT):
            const light = State.lights[action.payload.index];
            const updatedLight = {
                ...light,
                ...action.payload.updatedLight
            };
            const lights = [...State.lights];
            lights[action.payload.index] =updatedLight;
            return{
                ...State,
                lights: lights
            }

        case(LightActions.DELETE_LIGHT):
            const oldLights = [...State.lights];
            oldLights.splice(action.payload, 1);

            return{
                ...State,
                lights: oldLights
            }
        default:
            return State;
    }
}