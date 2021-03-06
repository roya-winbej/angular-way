import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipesService.selectedRecipeEvent
      .subscribe((recipe: RecipeModel) => {
      this.currentRecipe = recipe;
    });
  }

}
