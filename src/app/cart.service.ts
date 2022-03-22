import { Cart } from "./model/model.cart";

export class CartService{
    orderPlaced:boolean = false;
    cart:Cart[]=[];

    getCart(){
        return this.cart.slice();
    }
}