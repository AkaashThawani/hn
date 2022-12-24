// managehttp.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivationEnd, ActivationStart } from '@angular/router';
import { HttpCancelService } from './http-cancel.service';
import { takeUntil } from 'rxjs/operators';

@Injectable()
export class ManageHttpInterceptor implements HttpInterceptor {

    constructor(router: Router,
        private httpCancelService: HttpCancelService) {
            router.events.subscribe(event => {
                // An event triggered at the end of the activation part of the Resolve phase of routing.
                if (event instanceof ActivationStart) {
                  // Cancel pending calls
                  this.httpCancelService.cancelPendingRequests();
                }
            });
    }

    intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
      return next.handle(req).pipe(takeUntil(this.httpCancelService.onCancelPendingRequests()))
    }
}