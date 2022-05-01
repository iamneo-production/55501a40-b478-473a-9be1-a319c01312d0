import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { FishService } from 'src/app/fish.service';
import { InventoryService } from 'src/app/inventory.service';
import { Fish } from 'src/app/model/Fish';
import { Cart } from 'src/app/model/model.cart';

@Component({
  selector: 'app-fishdetail',
  templateUrl: './fishdetail.component.html',
  styleUrls: ['./fishdetail.component.css']
})
export class FishdetailComponent implements OnInit {
  fish!:Fish;
  id!:number;
  cart:Cart[] =[];
  constructor(
    private router :Router,private inventoryService:InventoryService,
    private route :ActivatedRoute,private cartService:CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.fish = this.inventoryService.getFish(this.id);
        // console.log(this.fish.name);
      }
    )
  }

  onCartAdded(quantity:HTMLInputElement){
    let val = ((<HTMLInputElement>quantity).value);
    this.cart = this.cartService.getCart();
    for(let carts of this.cart){
      if(this.fish.name === carts.fish.name){
        carts.quantity = carts.quantity + (+val); 
        this.router.navigate(['/cart']);
        return;
      }
      
    }
    this.cartService.cart.push(new Cart(this.fish,+val));
    this.router.navigate(['/cart']);
  }

}
