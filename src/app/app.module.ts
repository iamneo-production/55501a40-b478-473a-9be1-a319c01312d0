import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FishdetailComponent } from './homepage/fishdetail/fishdetail.component'
import { FishService } from './fish.service';
import { CartService } from './cart.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminhomepageComponent } from './dashboard/adminhomepage/adminhomepage.component';
import { AddproductComponent } from './dashboard/addproduct/addproduct.component';
import { InventoryService } from './inventory.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    OrderComponent,
    LoginComponent,
    SignupComponent,
    FishdetailComponent,
    DashboardComponent,
    AdminhomepageComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FishService,CartService,InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
