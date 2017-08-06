import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Some', 'some desc', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif'),
    new RecipeModel('Some', 'some desc', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif')
  ];

  constructor() { }

  ngOnInit() {
  }

}
