import { Light } from '../../lights/light.model';

export class Room {
    public name: string;
    public lights: Light[];

    constructor(name: string, lights: Light[]) {
        this.name = name;
        this.lights = lights;
    }
}