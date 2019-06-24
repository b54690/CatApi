import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialUiProvider } from '../providers/materialUi';
import { SlickModule } from 'ngx-slick';
import { ImageCarouselComponent } from '../components/imageCarousel';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MaterialUiProvider,
    SlickModule
  ],
  declarations: [
    ImageCarouselComponent
  ],
  exports: [
    ImageCarouselComponent
  ],
  providers: []
})
export class ImageCarouselModule {
}
