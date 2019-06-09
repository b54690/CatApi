import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';
import {Breed} from '../domain/breeds/breed';
import {SearchResult} from '../domain/searchResult/searchResult';
import {MatOptionSelectionChange} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchComponent implements OnInit {
  public breedList: Array<Breed>;
  public breed: Array<SearchResult>;

  constructor(
    private searchService: SearchService
  ) {
  }

  public ngOnInit() {
    this.getBreedList();
  }

  public getSearchResults(event: MatOptionSelectionChange, query: string) {
    if (event.source.selected) {
      this.searchService.searchCat(query).subscribe((res) => {
        this.breed = res;
      });
    }
  }

  public getBreedList() {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}
