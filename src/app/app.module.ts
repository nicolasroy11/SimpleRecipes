import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RecipeModule } from './recipes/recipe.module';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { AppSettingsService } from './app-settings/app-settings.service';
import { AppSettingsRouteGuard } from './app-settings/app-settings-route-guard';
import { AppSettings } from './app-settings/app-settings';
import { DialogService } from './libs/dialog/dialog.service';
import { DialogModule } from './libs/dialog/dialog.module';

const routing = RouterModule.forRoot([
  {
    path: 'all-recipes',
    component: RecipeListComponent,
    canActivate: [AppSettingsRouteGuard]
  }, {
    path: 'all-recipes/:id',
    component: RecipeDetailComponent,
    canActivate: [AppSettingsRouteGuard]
  },
  {
    path: '**',
    redirectTo: 'all-recipes',
    pathMatch: 'full'
  },
]);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DialogModule,
    BrowserModule,
    RecipeModule,
    MatButtonModule,
    routing
  ],
  providers: [
    AppSettings,
    AppSettingsService,
    AppSettingsRouteGuard,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
