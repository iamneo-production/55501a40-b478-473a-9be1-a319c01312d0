import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Cart } from '../model/model.cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart[]=[];
  constructor(private cartService:CartService,
    private router:Router) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  onPlaceOrder(){
    this.cartService.orderPlaced=true;
    this.router.navigate(['/orders'])
  }

  
  

}
