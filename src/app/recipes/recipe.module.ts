import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeService } from './recipe.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { SidebarModule } from 'ng-sidebar';
import { RecipeEditingModalComponent } from './recipe-editing-modal/recipe-editing-modal.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeListItemComponent,
    RecipeEditingModalComponent,
    NavigationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    RecipeService
  ],
  entryComponents: [RecipeEditingModalComponent],
  bootstrap: []
})
export class RecipeModule { }
