import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Breed} from '../../domain/breed/breed';
import {Image} from '../../domain/image/image';

@Injectable()
export class SearchService {

  constructor(
    private http: HttpClient
  ) {
  }

  public breedsList(): Observable<Array<Breed>> {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const queryUrl = `${url}`;

    return this.http.get<Breed[]>(queryUrl).map((results) => {
      const breedResults: Array<Breed> = [];

      results.forEach(res => {
        const result: Breed = new Breed(
          res.id,
          res.name
        );
        breedResults.push(result);
      });
      console.log(breedResults);
      return breedResults;
    });
  }

  public searchOneBreed(query: string): Observable<Array<Breed>> {
    const url = 'https://api.thecatapi.com/v1/breeds/search/?format=json&';
    const params: Array<string> = [
      `q=${query}`,
    ];
    const queryUrl = `${url}${params}`;

    return this.http.get<Breed[]>(queryUrl).map((results) => {
      const searchResults: Array<Breed> = [];

      results.forEach(res => {
        const result: Breed = new Breed(
          res.id,
          res.name,
        );
        searchResults.push(result);
      });
      console.log(searchResults);
      return searchResults;
    });
  }

  public searchBreedImage(query: string): Observable<Array<Image>> {
    // https://api.thecatapi.com/v1/images/search?breed_ids=aege&limit=8
    const url = 'https://api.thecatapi.com/v1/images/search?breed';
    const params: Array<string> = [
      `_ids=${query}&limit=8`
    ];
    const queryUrl = `${url}${params}`;

    return this.http.get<Image[]>(queryUrl).map((results) => {
      const imageResults: Array<Image> = [];

      results.forEach(res => {
        const result: Image = new Image(
          res.id,
          res.url
        );
        imageResults.push(result);
        console.log(imageResults)
      });
      return imageResults;
    });
  }
}
