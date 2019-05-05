import {Observable} from 'rxjs';
import {SearchResult} from '../../domain/searchResult/searchResult';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private apiKey: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiKey = 'YOUR_API_KEY';
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
