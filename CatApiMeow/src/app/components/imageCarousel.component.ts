import {Component, Input} from '@angular/core';
import {Image} from '../domain/image/image';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-carousel',
  templateUrl: '../templates/imageCarousel.component.html'
})

export class ImageCarouselComponent {
  @Input() public images: Array<Image>;

  constructor(config: NgbCarouselConfig) {
    config.keyboard = false;
    config.pauseOnHover = false;
    config.wrap = true;
  }

  public slideConfig = {'slidesToShow': 4, 'slidesToScroll': 4};
}
