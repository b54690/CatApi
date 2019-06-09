import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatOptionModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class MaterialUiProvider {
}
