import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { HttpCancelService } from './http-cancel.service';

// Renamed for clarity to match the function's purpose
export const manageHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const httpCancelService = inject(HttpCancelService);
  
  // This function now ONLY handles the per-request cancellation logic.
  return next(req).pipe(takeUntil(httpCancelService.onCancelPendingRequests()));
};