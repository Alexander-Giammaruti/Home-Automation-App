import { Lock } from '../shared/lock.model';
import { MyWindow } from '../shared/window.model';

export class SecuritySystem {
    public name: string;
    public alarmSettings: {
        instantArm: boolean,
        motionSensors: boolean
    };
    armed: boolean;
    locks: Lock[];
    windows: MyWindow[];
  

    constructor(name: string, alarmSettings: {instantArm: boolean, motionSensors: boolean}, isArmed: boolean ){
        this.name = name;
        this.alarmSettings = alarmSettings;
    }
}
