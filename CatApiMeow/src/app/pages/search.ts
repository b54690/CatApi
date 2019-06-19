import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';
import {Breed} from '../domain/breed/breed';
import {MatOptionSelectionChange} from '@angular/material';
import {Image} from '../domain/image/image';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchPageComponent implements OnInit {
  public header = 'Cat Skills';
  public breedList: Array<Breed>;
  public breed: Array<Breed>;
  public images: Array<Image>;

  constructor(
    private searchService: SearchService
  ) {
  }

  public ngOnInit() {
    this.getBreedList();
  }

  private getBreedInfo(name: string) {
      this.searchService.searchOneBreed(name).subscribe((res) => {
        console.log(res);
        this.breed = res;
      });
  }

  private getBreedImage(id: string) {
      this.searchService.searchBreedImage(id).subscribe((res) => {
        this.images = res;
    });
  }

  public getSearchResult(event: MatOptionSelectionChange, name: string, id: string) {
    if (event.source.selected) {
      this.getBreedInfo(name);
      this.getBreedImage(id);
    }
  }

  public getBreedList() {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}
