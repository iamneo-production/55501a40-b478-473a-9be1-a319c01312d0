import { EventEmitter } from "@angular/core";
import { Fish } from "./model/Fish";

export class FishService{

    public fishSelected = new EventEmitter<Fish>();
    public indexSelected!:number;

    private fishes : Fish[]=[
        new Fish("fighter","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",12,"a good"),
        new Fish("flower","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"avery"),
        new Fish("goldfish","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",44,"greay"),
        new Fish("happy","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",123,"fant"),
        new Fish("flower","https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2020/04/Jordanella_floridae_Plate_TZSR14b_24_50mm_2.jpg",42,"fas")
      ];

      getFishs(){
          return this.fishes.slice();
      }
      getFish(index:number){
          return this.fishes.slice()[index];
      }
}