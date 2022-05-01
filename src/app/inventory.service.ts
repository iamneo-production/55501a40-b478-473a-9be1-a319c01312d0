import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Fish } from "./model/Fish";
import { Cart } from "./model/model.cart";
import { Inventory } from "./model/model.inventory";

export class InventoryService{
    Invent: Inventory[]=[
        new Inventory(new Fish("fighter","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",12,"a good"),20),
        new Inventory(new Fish("Rose","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"avery"),20),
        new Inventory(new Fish("goldfish","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",44,"greay"),30),
        new Inventory(new Fish("happy","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",123,"fant"),30),
        new Inventory(new Fish("flower","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"fas"),30)
    ];
    singleProduct = new EventEmitter<Cart>();
    editmode = new Subject<boolean>();
    inventory = new Subject<Inventory[]>();

    getInventory(){
        return this.Invent.slice();
    }
    getOriginalInventory(){
        return this.Invent;
    }

    getFish(index:number){
        return this.Invent.slice()[index].fish;
    }

    addInventory(inventory:Inventory){

        this.Invent.push(inventory);
        this.inventory.next(this.Invent.slice());
    }

    deleteInventory(index:number){
        this.Invent.splice(index,1);
        this.inventory.next(this.Invent.slice());
    }

    updateInventory(inventory:Inventory){
        // let image='';
        // let desc='';
        // let price;
        // let quantity;
        for(let inv of this.Invent){
            if(inv.fish.name === inventory.fish.name){
                inv.fish.image = inventory.fish.image;
                inv.fish.description = inventory.fish.description;
                inv.fish.price = inventory.fish.price;
                inv.quantity = inventory.quantity;
            }
        }
        this.inventory.next(this.Invent.slice());
    }
}