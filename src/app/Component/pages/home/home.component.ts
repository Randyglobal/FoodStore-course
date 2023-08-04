import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shares/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // creating an instance of the service 
  constructor(private foodStore: FoodService, activatedRoute: ActivatedRoute){
    // listen to the route params
    // Subscribe means anytime when the params changes, call the function inside the subscribe
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
      this.foods = this.foodStore.getAllFoodSearch(params.searchTerm);
      // to continue with the tags, since its the same step, we do an elseif
      else if(params.tag)
      this.foods = this.foodStore.getAllFoodsByTags(params.tag)
      else
      this.foods = foodStore.getAll();
    })
    // this.foods = foodStore.getAll();
  }

  // passing the class to a variable
  foods: Food[] =[];


  ngOnInit(): void {
    
  }

}
