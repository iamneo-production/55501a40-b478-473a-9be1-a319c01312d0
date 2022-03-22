import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from "./cart/cart.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { FishdetailComponent } from "./homepage/fishdetail/fishdetail.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { LoginComponent } from "./login/login.component";
import { OrderComponent } from "./order/order.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {path:'' , redirectTo:'/login' , pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent },
    {path: 'home', component: HomepageComponent, children:[
        {path: ':id', component: FishdetailComponent}
    ]},
    {path:'addproduct', component: DashboardComponent},
    {path: 'cart' , component: CartComponent},
    {path : 'orders' , component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
