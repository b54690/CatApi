import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catApiMeow } from '../../config/CatApiMeow';

@Injectable()
class BaseUrl implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req)

    const apiRequest = req.clone({url: `${catApiMeow.api.url}/${req.url}`});

    return next.handle(apiRequest);
  }
}

export { BaseUrl as BaseUrlInterceptor };

