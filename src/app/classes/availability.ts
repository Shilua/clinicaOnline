import { Time } from '@angular/common';

export class Availability {
    public especiality:string;
    public medic:string;
    public id: string;
    public day:Date;
    public quota:Map<number,boolean>;

    constructor(){
        for (let i = 0; i < 8; i++) {
            this.quota.set(i+1,false);
        }
    }
    
}

