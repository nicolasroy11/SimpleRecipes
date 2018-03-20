import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public id: number;
  public recipe: RecipeModel;
  constructor(private _recipeService: RecipeService, private _activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this._recipeService.getById(this.id).subscribe((res: RecipeModel) => {
        this.recipe = res;
      });
    });
  }

}
