import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/pages/home/home.component';
import { FoodPagesComponent } from './Component/pages/food-pages/food-pages.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
