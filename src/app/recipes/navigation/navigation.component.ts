import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DialogService } from '../../libs/dialog/dialog.service';
import { RecipeService } from '../recipe.service';
import { RecipeEditingModalComponent } from '../recipe-editing-modal/recipe-editing-modal.component';
import { RecipeModel } from '../../../models/recipe.model';
import { AppSettings } from '../../app-settings/app-settings';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() toggleFilterPanel = new EventEmitter<boolean>();
  @Output() newRecipeAdded = new EventEmitter();
  public isFilterPanelOpen = false;
  public appTitle: string = this._appSettings.constants.appTitle;

  constructor(
    private _dialogService: DialogService,
    private _recipeService: RecipeService,
    private _appSettings: AppSettings) { }

  ngOnInit() {
  }

  public onAddNewRecipe() {
    const editModal = this._dialogService.custom(RecipeEditingModalComponent, null, 'Add Recipe');
    editModal.subscribe((recipe) => {
      if (recipe) {
        this._recipeService.postNew(recipe).subscribe(() => {
          this.onNewRecipeAdded();
        });
      }
    });
  }

  public onToggleFilterPanel() {
    this.isFilterPanelOpen = !this.isFilterPanelOpen;
    this.toggleFilterPanel.emit(this.isFilterPanelOpen);
  }

  public onNewRecipeAdded() {
    this.newRecipeAdded.emit();
  }

}
