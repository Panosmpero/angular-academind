import { EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Test description',
      'https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d'
    ),
    new Recipe(
      'Test recipe 2',
      'Test description 2',
      'https://c.pxhere.com/images/45/e8/97d46a089d87a53cdcab75006a29-1613433.jpg!d'
    ),
  ];

  getRecipes() {
    // we return a copy of the original array
    return this.recipes.slice();
  }
}
