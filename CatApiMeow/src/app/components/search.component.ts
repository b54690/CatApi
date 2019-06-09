import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';
import {Breed} from '../domain/breeds/breed';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchComponent implements OnInit {
  public breedList: Array<Breed>;

  constructor(
    private searchService: SearchService
  ) {
    this.getBreedList();
  }

  public ngOnInit() {
    this.getSearchResults();
    this.getBreedList();
  }

  public getSearchResults() {
    this.searchService.searchCat('beng').subscribe();
  }

  public getBreedList() {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}
