
export class Light {
    public name: string;
    public description: string;
    public powered: {on: boolean, brightness: number};

    constructor(name: string, desc: string, powered: {on: boolean, brightness: number}) {
        this.name=name;
        this.description = desc;
        this.powered = powered;
    }
    
}

