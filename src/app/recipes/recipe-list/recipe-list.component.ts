import {Component, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe('Test name 1', 'This is a test', 'https://www.simplyrecipes.com/thmb/Bp1ZU6_IWv-4vXR2qqbFqpqedDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_LEAD-5-550c92292550443bbc7ec24bca9e2144.jpg'),
    new Recipe('Test name 2', 'This is a test', 'https://www.simplyrecipes.com/thmb/Bp1ZU6_IWv-4vXR2qqbFqpqedDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_LEAD-5-550c92292550443bbc7ec24bca9e2144.jpg')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
