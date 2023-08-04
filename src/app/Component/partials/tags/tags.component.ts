import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shares/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(foodStore: FoodService){
    this.tags = foodStore.getAllTags();
  }
}
