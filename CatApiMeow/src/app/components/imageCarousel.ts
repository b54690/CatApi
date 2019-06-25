import { Component, Input } from '@angular/core';
import { Image } from '../domain/image/image';
import { FavouritesService } from '../infrastructure/services/favourites';

@Component({
  selector: 'app-image-carousel',
  templateUrl: '../templates/imageCarousel.html'
})

class ImageCarousel {
  public slideConfig = { 'slidesToShow': 4, 'slidesToScroll': 4 };
  @Input() public images: Array<Image>;

  constructor(
    private favouritesService: FavouritesService
  ) {
  }

  public favouriteSelect(imageId): void {
    console.log('fave select', imageId);
    this.favouritesService.selectFavouriteImage('User-123', imageId).subscribe();
  }
}

export { ImageCarousel as ImageCarouselComponent };

