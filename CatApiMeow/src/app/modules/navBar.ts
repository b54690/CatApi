import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiProvider } from '../providers/materialUi';
import { NavBarComponent } from '../components/navBar';

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
