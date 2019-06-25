import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from '../pages/search';
import { SearchService } from '../infrastructure/services/search';
import { MaterialUiProvider } from '../providers/materialUi';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCarouselModule } from './imageCarousel';
import { ToolbarModule } from './toolbar';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesService } from '../infrastructure/services/favourites';

const routes: Routes = [
  { path: '', component: SearchPage }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterialUiProvider,
    FormsModule,
    ReactiveFormsModule,
    ImageCarouselModule,
    ToolbarModule
  ],
  declarations: [
    SearchPage
  ],
  exports: [
    SearchPage
  ],
  providers: [
    SearchService,
    FavouritesService
  ]
})
export class SearchModule {
}
