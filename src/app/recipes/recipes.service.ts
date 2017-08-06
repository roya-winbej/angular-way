import { RecipeModel } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipesService {
  private recipes: RecipeModel[] = [
    new RecipeModel('Some', 'some desc', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif'),
    new RecipeModel('Some 2', 'some desc 2', 'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif')
  ];

  selectedRecipeEvent = new EventEmitter<RecipeModel>();

  getRecipes() {
    return this.recipes.slice();
  }

}
