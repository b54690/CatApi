import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Breed } from '../../domain/breed/breed';
import { Image } from '../../domain/image/image';
import { Favourite } from '../../domain/user/favourite';

@Injectable()
class Search {

  constructor(
    private http: HttpClient
  ) {
  }

  public breedsList(): Observable<Array<Breed>> {

    return this.http.get<Breed[]>(`breeds`).map((results) => {
      const breedResults: Array<Breed> = [];

      results.forEach(res => {
        const result: Breed = new Breed(
          res.id,
          res.name
        );
        breedResults.push(result);
      });
      return breedResults;
    });
  }

  public searchOneBreed(query: string): Observable<Array<Breed>> {

    return this.http.get<Breed[]>(`breeds/search/?format=json&q=${query}`).map((results) => {
      const searchResults: Array<Breed> = [];

      results.forEach(res => {
        const result: Breed = new Breed(
          res.id,
          res.name,
        );
        searchResults.push(result);
      });
      return searchResults;
    });
  }

  public searchBreedImage(query: string): Observable<Array<Image>> {

    return this.http.get<Image[]>(`images/search?breed_ids=${query}&limit=8`).map((results) => {
      const imageResults: Array<Image> = [];

      results.forEach(res => {
        const result: Image = new Image(
          res.url,
          res.id
        );
        imageResults.push(result);
      });
      return imageResults;
    });
  }
}
export { Search as SearchService };



