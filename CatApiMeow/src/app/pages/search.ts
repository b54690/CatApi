import { SearchService } from '../infrastructure/services/search';
import { Component, OnInit } from '@angular/core';
import { Breed } from '../domain/breed/breed';
import { MatOptionSelectionChange } from '@angular/material';
import { Image } from '../domain/image/image';
import { FavouritesService } from '../infrastructure/services/favourites';
import { Favourite } from '../domain/user/favourite';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.html'
})

class Search implements OnInit {
  public header = 'Cat Skills';
  public breedList: Array<Breed>;
  public breed: Array<Breed>;
  public images: Array<Image>;

  constructor(
    private searchService: SearchService,
    private favouritesService: FavouritesService
  ) {
  }

  public ngOnInit() {
    this.getBreedList();
  }

  private getBreedInfo(name: string): void {
      this.searchService.searchOneBreed(name).subscribe((res) => {
        console.log(res);
        this.breed = res;
      });
  }

  private getBreedImage(id: string): void {
      this.searchService.searchBreedImage(id).subscribe((res) => {
        this.images = res;
    });
  }

  public getSearchResult(event: MatOptionSelectionChange, name: string, id: string): void {
    if (event.source.selected) {
      this.getBreedInfo(name);
      this.getBreedImage(id);
    }
  }

  public getBreedList(): void {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}

export { Search as SearchPage };

