import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiProvider } from '../providers/materialUi';
import { HomePage } from '../pages/home';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePage }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiProvider
  ],
  declarations: [
    HomePage
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule {
}
