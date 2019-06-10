import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCarouselComponent} from '../components/imageCarousel.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
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
