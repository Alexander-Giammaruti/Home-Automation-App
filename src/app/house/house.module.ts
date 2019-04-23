import { Room } from './rooms/room.model';

export class House {
    public rooms: Room[];

    constructor(rooms: Room[]) {
        this.rooms = rooms;
    }
}

