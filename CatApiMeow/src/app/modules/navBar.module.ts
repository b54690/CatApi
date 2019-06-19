import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {NavBarComponent} from '../components/navBar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiProvider
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule {
}
