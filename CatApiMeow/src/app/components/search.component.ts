import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchComponent implements OnInit{
  constructor(
    private searchService: SearchService
  ) {
  }

  public ngOnInit() {
    console.log('onit')
    this.getSearchResults();
  }

  public getSearchResults() {
    this.searchService.searchCat('beng').subscribe();
  }
}
