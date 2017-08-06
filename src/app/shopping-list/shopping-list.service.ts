import { IngredientModel } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  public onAddIngredientEvt: EventEmitter<IngredientModel[]> = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [ new IngredientModel('test', '323')];

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addNewIngredient(ingredient: IngredientModel) {
    this.ingredients.push(ingredient);
    this.onAddIngredientEvt.emit(this.getIngredients());
  }

  public addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
  }
}
