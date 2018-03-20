import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../../../../models/recipe.model';
import { Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { DialogService } from '../../../libs/dialog/dialog.service';
import { RecipeEditingModalComponent } from '../../recipe-editing-modal/recipe-editing-modal.component';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {

  @Input() public recipe: RecipeModel;
  @Output() RecipeCollectionEdited = new EventEmitter();

  constructor(
    private _router: Router,
    private _recipeService: RecipeService,
    private _dialogService: DialogService) { }

  public ngOnInit() {
  }

  public onRecipeSelected(recipeId: number): void {
    this._router.navigate([this._router.url, recipeId]);
  }

  public onEditSelected(recipe: RecipeModel) {
    const editModal = this._dialogService.custom(RecipeEditingModalComponent, recipe, 'Edit Recipe');
    editModal.subscribe((updatedRecipe) => {
      if (recipe) {
        this._recipeService.update(updatedRecipe).subscribe(() => {
          this.RecipeCollectionEdited.emit();
        });
      }
    });
  }

  public onDeleteRecipe(id: number) {
    this._recipeService.delete(id).subscribe(() => {
      this.RecipeCollectionEdited.emit();
    });
  }

}
