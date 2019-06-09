import {SearchService} from '../infrastrcuture/services/search.service';
import {Component, OnInit} from '@angular/core';
import {Breed} from '../domain/breeds/breed';
import {SearchResult} from '../domain/searchResult/searchResult';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: '../templates/search.component.html'
})

export class SearchComponent implements OnInit {
  public form: FormGroup;
  public breedList: Array<Breed>;
  public breed: Array<SearchResult>;

  constructor(
    private searchService: SearchService
  ) {
    this.form = new FormGroup(
      {
        breed: new FormControl('')
      }
    );
  }

  public ngOnInit() {
    this.getBreedList();
  }

  public getSearchResults(query: string) {
    console.log('hello', query)
    this.searchService.searchCat(query).subscribe((res) => {
      this.breed = res;
    });
  }

  public getBreedList() {
    this.searchService.breedsList().subscribe((res) => {
      this.breedList = res;
    });
  }
}
