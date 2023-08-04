import { Injectable } from '@angular/core';
import { Food } from '../shares/models/food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shares/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  // calling for the content in the data.ts and returning it in the function below which
  // has the class Food and which will be called in the home.component.ts
  getAll(): Food[]{
    return sample_foods;
  }
  // this function filters the names of the food which is in the function getAll()
  // search here is what the user will input and should match with the food.name
  // we also use .toLowerCase because we want to set both what the user will input and the food.name to lowercase
  getAllFoodSearch(searchTerm: string){
    return this.getAll().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }
  // we want to get all the tags first 
  getAllTags():Tag[]{
    return sample_tags;
  }
  // we want to get all the food by their food tag
  getAllFoodsByTags(tag: string):Food[]{
    return tag === "All"?
    this.getAll():
     this.getAll().filter(food => food.tags?.includes(tag));
  }
  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
