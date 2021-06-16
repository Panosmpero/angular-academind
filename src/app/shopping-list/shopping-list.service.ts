import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];
  newIngredients = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredients.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // Too many emits with this method
    // ingredients.forEach(ingredient => {
    //   this.addIngredient(ingredient)
    // });
    this.ingredients.push(...ingredients);
    this.newIngredients.emit(this.ingredients.slice());
  }
}
