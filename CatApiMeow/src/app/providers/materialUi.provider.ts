import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  exports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class MaterialUiProvider {
}
