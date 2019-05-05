import {Observable} from 'rxjs';
import {SearchResult} from '../../domain/searchResult/searchResult';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SearchService {
  private apiKey: string;
  public result: SearchResult;

  constructor(
    private http: HttpClient
  ) {
    this.apiKey = 'YOUR_API_KEY';
  }

  public searchCat(): Observable<Array<SearchResult>> {
    const url = 'https://api.thecatapi.com/v1/images/search?breed_ids=';
    const params = 'beng';
    const queryUrl = `${url}${params}`;

    return this.http.get(queryUrl).pipe(
      map(res => {
        console.log(res)

      })
    )

  }
}
