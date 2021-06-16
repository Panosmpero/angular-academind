import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private receipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    // this.recipeSelected.emit(this.recipe);
    this.receipeService.recipeSelected.emit(this.recipe);
  }
}
