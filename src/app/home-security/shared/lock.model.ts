import { Time } from '@angular/common';

export class Lock {
    public name: string;
    public lockedState: boolean;
    public lockTime: Time;

    constructor(name: string, lockedState: boolean, lockTime: Time) {
        this.name = name;
        this.lockedState = lockedState;
        this.lockTime = lockTime;
    }
}

