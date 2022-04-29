import { Component, OnInit } from '@angular/core';
import { FishService } from '../fish.service';
import { InventoryService } from '../inventory.service';
import { Fish } from '../model/Fish';
import { Inventory } from '../model/model.inventory';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  fishes !: Fish[];
  inventory !:Inventory[];
  Allfish :Fish[]=[];

  constructor(private fishService:FishService,
    private inventoryService:InventoryService) { }

  ngOnInit(): void {
    this.fishes = this.fishService.getFishs();   
     this.inventory = this.inventoryService.getInventory();
    for(let invent of this.inventory){
      this.Allfish.push(invent.fish);
      // console.log(invent.fish);
    }
  }

  

}
