import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiProvider } from '../providers/materialUi';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesPage } from '../pages/favourites';
import { FavouritesService } from '../infrastructure/services/favourites';

const routes: Routes = [
  { path: '', component: FavouritesPage }
];

@NgModule({
            imports: [
              CommonModule,
              RouterModule.forChild(routes),
              MaterialUiProvider
            ],
            declarations: [
              FavouritesPage
            ],
            exports: [
              FavouritesPage
            ],
            providers: [
              FavouritesService
            ]
          })
class Favourites {
}
export { Favourites as FavouritesModule };
