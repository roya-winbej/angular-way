import { RecipeModel } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Some',
      'some desc',
      'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif',
      [new IngredientModel('test1', '2')]
    ),
    new RecipeModel(
      'Some 2',
      'some desc 2',
      'http://ayurvedawellness.org/wp-content/uploads/2012/02/recipes.gif',
      [new IngredientModel('test122', '232'), new IngredientModel('3232323', '232')]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  selectedRecipeEvent = new EventEmitter<RecipeModel>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
