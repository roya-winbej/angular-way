import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipeEvent = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel('Some', 'some desc', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif'),
    new RecipeModel('Some 2', 'some desc 2', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif')
  ];

  getClickedRecipe(recipe: RecipeModel) {
    this.selectedRecipeEvent.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
