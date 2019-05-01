
export class Light {
    public name: string
    public powered: {on: boolean, brightness: number};

    constructor(name: string, powered: {on: boolean, brightness: number}) {
        this.name=name;
        this.powered = powered;
    }
    
}