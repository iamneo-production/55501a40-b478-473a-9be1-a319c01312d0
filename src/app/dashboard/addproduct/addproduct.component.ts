import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from 'src/app/inventory.service';
import { Fish } from 'src/app/model/Fish';
import { Cart } from 'src/app/model/model.cart';
import { Inventory } from 'src/app/model/model.inventory';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product!:Cart;
  mode:boolean = false;
  productForm!:FormGroup;


  constructor(private inventoryService:InventoryService) { }

  ngOnInit(): void {

    
    this.inventoryService.singleProduct.subscribe(
      (cart:Cart) =>{
        this.product = cart;
        // console.log(this.product);  
      }
    );

    this.inventoryService.editmode.subscribe(
      (bool:boolean) =>{
        this.mode = bool;
        // console.log(bool);
        this.initForm();
      }
    );

    this.initForm();

  }

 private initForm(){
    let fishname = '';
    let fishprice ;
    let fishdescription = '';
    let fishquantity;
    let fishimage ='';
    if(this.mode){

      fishname = this.product.fish.name;
      fishprice = this.product.fish.price;
      fishdescription = this.product.fish.description;
      fishimage = this.product.fish.image;
      fishquantity = this.product.quantity;
    }
    this.productForm = new FormGroup({
      'name': new FormControl(fishname, Validators.required),
      'price': new FormControl(fishprice, Validators.required),
      'description': new FormControl(fishdescription, Validators.required),
      'quantity': new FormControl(fishquantity, Validators.required),
      'image': new FormControl(fishimage, Validators.required)
    });
  }

  onSubmit(){
    // console.log(this.productForm.value.name);
    if(this.mode === false){
      this.onAdd();
      this.productForm.reset();
      return;
    }
 
    this.OnUpdate();
    this.productForm.reset();

    

  }

  onAdd(){
    let name = this.productForm.value.name;
    let description = this.productForm.value.description;
    let price = this.productForm.value.price;
    let image = this.productForm.value.image;
    let quantity = this.productForm.value.quantity;
    this.inventoryService.addInventory(new Inventory(new Fish(name,image,price,description),quantity));
  }

  OnUpdate(){
    let name = this.productForm.value.name;
    let description = this.productForm.value.description;
    let price = this.productForm.value.price;
    let image = this.productForm.value.image;
    let quantity = this.productForm.value.quantity;
    this.inventoryService.updateInventory(new Inventory(new Fish(name,image,price,description),quantity));
    this.mode = false;
  }

}
