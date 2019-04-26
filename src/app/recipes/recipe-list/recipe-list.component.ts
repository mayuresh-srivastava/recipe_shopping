import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/bhtv_ep5_shakshuka11_0.jpg?itok=RZ2CPwM_&mtime=1516076383'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/bhtv_ep5_shakshuka11_0.jpg?itok=RZ2CPwM_&mtime=1516076383')
  ];
  constructor() { }

  ngOnInit() {
  }

}
