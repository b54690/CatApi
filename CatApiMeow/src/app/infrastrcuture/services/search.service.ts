import {Observable} from 'rxjs';
import {SearchResult} from '../../domain/searchResult/searchResult';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Breed} from '../../domain/breeds/breed';

@Injectable()
export class SearchService {
  private apiKey: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiKey = 'YOUR_API_KEY';
  }

  public breedsList(): Observable<Array<Breed>> {
    const url = 'https://api.thecatapi.com/v1/breeds/';
    const queryUrl = `${url}`;

    return this.http.get<Breed[]>(queryUrl).map((results) => {
      const breedResults: Array<Breed> = [];

      results.forEach(res => {
        const result: Breed = new Breed(
          res.name
        );
        breedResults.push(result);
      });
      console.log(breedResults);
      return breedResults;
    });
  }

  public searchCat(query: string): Observable<Array<SearchResult>> {
    const url = 'https://api.thecatapi.com/v1/breeds/search/?format=json&';
    const params: Array<string> = [
      `q=${query}`,
    ];
    const queryUrl = `${url}${params}`;

    return this.http.get<SearchResult[]>(queryUrl).map((results) => {
      const searchResults: Array<SearchResult> = [];

      results.forEach(res => {
        const result: SearchResult = new SearchResult(
          res.id,
          res.name
        );
        searchResults.push(result);
      });
      console.log(searchResults);
      return searchResults;
    });
  }
}
