import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../services/loading.service';

var pendingRequest = 0;

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{

  constructor(private looadingService: LoadingService){}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.looadingService.showLoading();
    pendingRequest = pendingRequest++;
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if(event.type === HttpEventType.Response){
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading(){
    pendingRequest = pendingRequest--;
    if(pendingRequest === 0){
      this.looadingService.hideLoading();
    }
  }
}
