import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCarouselComponent} from '../components/imageCarousel.component';
import {MaterialUiProvider} from '../providers/materialUi.provider';
import {SlickModule} from 'ngx-slick';

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
