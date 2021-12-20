import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'A test Recipe 2',
      'This a simple test 2',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
