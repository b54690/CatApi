import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {ToolbarComponent} from '../components/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialUiProvider,
  ],
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {
}
