import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { RecipeModel } from '../../../models/recipe.model';
import { AppSettings } from '../../app-settings/app-settings';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-editing-modal',
  templateUrl: './recipe-editing-modal.component.html',
  styleUrls: ['./recipe-editing-modal.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecipeEditingModalComponent),
      multi: true
    }
  ]
})
export class RecipeEditingModalComponent implements OnInit {
  @ViewChild('recipeForm') public recipeForm: NgForm;
  public model: RecipeModel;
  public categories = this.appSettings.constants.categories;
  public isNew: boolean;
  public actionLabel: string;

  constructor(
    public dialogRef: MatDialogRef<RecipeEditingModalComponent>,
    public appSettings: AppSettings
  ) { }

  public ngOnInit() {
    if (!this.model) {
      this.isNew = true;
      this.model = new RecipeModel();
      this.actionLabel = 'Add';
    } else {
      this.isNew = false;
      this.actionLabel = 'Save Changes';
    }
  }

  public onReturnModel(): void {
    if (this.recipeForm.valid) {
      this.dialogRef.close(this.model);
    }
  }

}
