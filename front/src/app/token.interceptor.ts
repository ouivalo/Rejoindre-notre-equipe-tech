import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const COOKIE_HEADER_NAME = 'X-CSRFToken';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addCsrfToken(request));
  }

  addCsrfToken(req: HttpRequest<any>) {
    let csrfToken = this.tokenExtractor.getToken() as string;
    if (csrfToken !== null && !req.headers.has(COOKIE_HEADER_NAME)) {
      req = req.clone({ headers: req.headers.set(COOKIE_HEADER_NAME, csrfToken) });
    }

    return req;
  }
}
