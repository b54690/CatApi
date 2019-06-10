import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from '../components/search.component';
import {SearchService} from '../infrastrcuture/services/search.service';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ImageCarouselModule} from './imageCarousel.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiProvider,
    FormsModule,
    ReactiveFormsModule,
    ImageCarouselModule
  ],
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule {
}
