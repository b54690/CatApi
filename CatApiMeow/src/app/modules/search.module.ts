import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPageComponent} from '../pages/search';
import {SearchService} from '../infrastrcuture/services/search.service';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageCarouselModule} from './imageCarousel.module';
import {ToolbarModule} from './toolbar.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: SearchPageComponent}
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
    SearchPageComponent
  ],
  exports: [
    SearchPageComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {
}
