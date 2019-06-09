import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from '../components/search.component';
import {SearchService} from '../infrastrcuture/services/search.service';
import {MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
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
