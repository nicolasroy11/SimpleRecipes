import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../../models/recipe.model';
import { AppSettings } from '../../app-settings/app-settings';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: RecipeModel[];
  public categories: string[] = this.appSettings.constants.categories;
  public filteredCategories: string[] = this.appSettings.constants.categories;
  public selectedCategory: string;
  public categorySearchString: string;

  constructor(
    private _recipeService: RecipeService,
    public appSettings: AppSettings) {
    this.categorySearchString = '';
  }

  public opened = false;

  public ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this._recipeService.get(this.selectedCategory).subscribe((recipes: RecipeModel[]) => {
      this.recipes = recipes;
    });
  }

  public resetRecipes() {
    this.selectedCategory = undefined;
    this.getRecipes();
  }

  public filterCategories() {
    const regex = new RegExp(`^${this.categorySearchString}`, 'i');
    this.filteredCategories = this.categories.filter((category) => {
      const match = regex.test(category);
      return match;
    });
  }

}
