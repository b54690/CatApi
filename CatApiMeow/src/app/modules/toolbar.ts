import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiProvider } from '../providers/materialUi';
import { ToolbarComponent } from '../components/toolbar';

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
