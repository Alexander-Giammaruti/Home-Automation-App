import { Lock } from '../shared/lock.model';
import { MyWindow } from '../shared/window.model';

export class SecuritySystem {
    public name: string;
    public armedState: {
        settings: {
            instantArm: boolean, 
            motionSensors: boolean
        }
        , isArmed: boolean}
  

    constructor(name: string, armedState: {settings: {instantArm: false, motionSensors: false}, isArmed: boolean}, ){
        this.name = name;
        this.armedState = armedState;
    }
}
