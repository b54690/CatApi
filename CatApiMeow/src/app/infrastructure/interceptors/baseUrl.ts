import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catApiMeow } from '../../config/CatApiMeow';

@Injectable()
class BaseUrl implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({'x-api-key': `${catApiMeow.api.key}`});
    const apiRequest = req.clone({url: `${catApiMeow.api.url}/${req.url}`, headers: headers });

    return next.handle(apiRequest);
  }
}

export { BaseUrl as BaseUrlInterceptor };

