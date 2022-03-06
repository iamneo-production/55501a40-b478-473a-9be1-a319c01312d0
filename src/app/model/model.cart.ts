import { Fish } from "./Fish";

export class Cart{
    fish!:Fish;
    quantity!:number;
    constructor(fish:Fish,quantity:number){
        this.fish = fish;
        this.quantity = quantity;
    }

}