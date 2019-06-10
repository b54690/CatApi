import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';
import {Breed} from '../domain/breed/breed';
import {MatOptionSelectionChange} from '@angular/material';
import {Image} from '../domain/image/image';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchComponent implements OnInit {
  public breedList: Array<Breed>;
  public breed: Array<Breed>;
  public image: Array<Image>;

  constructor(
    private searchService: SearchService
  ) {
  }

  public ngOnInit() {
    this.getBreedList();
  }

  private getBreedInfo(event: MatOptionSelectionChange, name: string) {
    if (event.source.selected) {
      this.searchService.searchOneBreed(name).subscribe((res) => {
        console.log(res);
        this.breed = res;
      });
    }
  }

  private getBreedImage(event: MatOptionSelectionChange, id: string) {
    if (event.source.selected) {
      this.searchService.searchBreedImage(id).subscribe((res) => {
        this.image = res;
      });
    }
  }

  public getSearchResult(event: MatOptionSelectionChange, name: string, id: string) {
    if (event.source.selected) {
      this.getBreedInfo(event, name);
      this.getBreedImage(event, id);
    }
  }

  public getBreedList() {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}
