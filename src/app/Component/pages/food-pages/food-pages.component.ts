import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shares/models/food';

@Component({
  selector: 'app-food-pages',
  templateUrl: './food-pages.component.html',
  styleUrls: ['./food-pages.component.scss']
})
export class FoodPagesComponent {
  food!: Food;
  // we inject the activated route to read the food id from the route params
  constructor(activatedRoute: ActivatedRoute, foodStore: FoodService,
     private cart: CartService, private router: Router){
    activatedRoute.params.subscribe((params)=> {
      if(params.id)
      this.food = foodStore.getFoodById(params.id);
    })
  }

  addToCart(){
    this.cart.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
