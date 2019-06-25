import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Favourite } from '../../domain/user/favourite';
import { Observable } from 'rxjs';
import { catApiMeow } from '../../config/CatApiMeow';

@Injectable()
class Favourites {

  constructor(
    private http: HttpClient
  ) {
  }

  public selectFavouriteImage(sub_id: 'User-123', image_id: string): Observable<Favourite> {
    const headers = new HttpHeaders({'x-api-key': `${catApiMeow.api.key}`});
    const imageBody = {
      image_id: image_id,
      sub_id: sub_id
    } as Favourite;

    console.log(imageBody);

    return this.http.post<Favourite>(`favourites`, imageBody, {headers: headers} );
  }

  public getFavourites(): Observable<Array<Favourite>> {
    const headers = new HttpHeaders({'x-api-key': `${catApiMeow.api.key}`});

    return this.http.get<Favourite[]>(`favourites`, {headers: headers}).map((results) => {
      console.log(results)
      const favouriteResults: Array<Favourite> = [];

      results.forEach(res => {
        const result: Favourite = new Favourite(
          res.sub_id,
          res.image_id
        );
        favouriteResults.push(result);
      });
      return favouriteResults;
    });
  }
}

export { Favourites as FavouritesService };

