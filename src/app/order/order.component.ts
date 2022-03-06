import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { InventoryService } from '../inventory.service';
import { Cart } from '../model/model.cart';
import { Inventory } from '../model/model.inventory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  cart:Cart[]=[];
  order!:boolean;
  total:number = 0;
  inventory:Inventory[]=[];

  constructor(private cartService:CartService,private route:Router,
    private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.order = this.cartService.orderPlaced;
    if(this.order){
      this.cart =  this.cartService.getCart();
    }

    for(let carts of this.cart){
      this.total = this.total+carts.quantity*carts.fish.price;
    }
  }
  onOrderPlaced(){
    this.inventory = this.inventoryService.getOriginalInventory();
    for(let carts of this.cart){
        for(let invent of this.inventory){
          if(invent.fish.name === carts.fish.name){
              invent.quantity = invent.quantity-carts.quantity;
          }
        }
    }
    this.route.navigate(['/addproduct']);
    // console.log("order placed");
    // for(let invent of this.inventory){
    //   console.log(invent.quantity);
    // }
  }


}
