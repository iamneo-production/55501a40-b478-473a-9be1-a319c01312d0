import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../inventory.service';
import { Cart } from '../model/model.cart';
import { Inventory } from '../model/model.inventory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Invent:Inventory[]=[];
  order!:boolean;

  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.Invent = this.inventoryService.getInventory();
    this.inventoryService.inventory.subscribe(
      (arr:Inventory[]) =>{
        this.Invent = arr;
      }
    );
  }

  onedit(cart:Cart){
    this.inventoryService.singleProduct.emit(cart);
    this.inventoryService.editmode.next(true);

  }

  onDelete(index:number){
    this.inventoryService.deleteInventory(index);
  }

}
