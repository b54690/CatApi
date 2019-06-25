import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favourite } from '../../domain/user/favourite';
import { Observable } from 'rxjs';

@Injectable()
class Favourites {

  constructor(
    private http: HttpClient
  ) {
  }

  public selectFavouriteImage(sub_id: 'User-123', image_id: string): Observable<Favourite> {
    const imageBody = {
      image_id: image_id,
      sub_id: sub_id
    } as Favourite;

    return this.http.post<Favourite>(`favourites`, imageBody );
  }

  public getFavourites(): Observable<Array<Favourite>> {
    return this.http.get<Favourite[]>(`favourites`).map((results) => {
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

