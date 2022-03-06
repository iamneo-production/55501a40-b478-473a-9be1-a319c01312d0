import { Fish } from "./Fish";

export class Inventory{
    fish!:Fish;
    quantity!:number;
    constructor(fish:Fish,quantity:number){
        this.fish = fish;
        this.quantity = quantity;
    }

}