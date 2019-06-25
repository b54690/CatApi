import { Component } from '@angular/core';
import { FavouritesService } from '../infrastructure/services/favourites';
import { Favourite } from '../domain/user/favourite';

@Component({
             selector: 'app-favourites',
             templateUrl: '../templates/favourites.html'
           })

class Favourites {
  public favourites: Array<Favourite>;

  constructor(
    private favouritesService: FavouritesService
  ) {
    this.getFavourites();
  }

  public getFavourites(): void {
    this.favouritesService.getFavourites().subscribe(favourites => {
      console.log(favourites);
      this.favourites = favourites;
    });
  }
}

export { Favourites as FavouritesPage };
