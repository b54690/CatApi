import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {HomePageComponent} from '../pages/home';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiProvider
  ],
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule {
}
