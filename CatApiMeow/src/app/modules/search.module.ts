import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from '../components/search.component';
import {SearchService} from '../infrastrcuture/services/search.service';

@NgModule({
  imports: [
    CommonModule
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
