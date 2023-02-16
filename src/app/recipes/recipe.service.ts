import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('Test name 1', 'This is a test', 'https://www.simplyrecipes.com/thmb/Bp1ZU6_IWv-4vXR2qqbFqpqedDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_LEAD-5-550c92292550443bbc7ec24bca9e2144.jpg'),
    new Recipe('Test name 2', 'This is a test', 'https://www.simplyrecipes.com/thmb/Bp1ZU6_IWv-4vXR2qqbFqpqedDE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply_Recipes_How_To_Flank_Steak_LEAD-5-550c92292550443bbc7ec24bca9e2144.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
