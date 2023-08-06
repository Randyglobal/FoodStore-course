import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/pages/home/home.component';
import { FoodPagesComponent } from './Component/pages/food-pages/food-pages.component';
import { CartPageComponent } from './Component/pages/cart-page/cart-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'search/:searchTerm',
    component: HomeComponent
  },
  {
    path:'tag/:tag',
    component: HomeComponent
  },
  {
    path:'food/:id',
    component: FoodPagesComponent
  },
  {
    path:'cart-page',
    component: CartPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
