import { IngredientModel } from '../shared/ingredient.model';

export class RecipeModel {
  public name = '';
  public description = '';
  public imageUrl = '';
  public ingredients: IngredientModel[] = [];

  constructor(name: string, desc: string, imageUrl: string, ingredients: IngredientModel[]) {
    this.name = name;
    this.description = desc;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
  }
}
