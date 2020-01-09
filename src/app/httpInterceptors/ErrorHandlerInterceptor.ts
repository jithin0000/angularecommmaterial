import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {errorObject} from 'rxjs/internal-compatibility';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return next.handle(req).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      console.log('client side event');
      console.log(error.error.message);
      console.log(error.message);
      console.log(error.status);
    } else {

      errorMessage = error.message.toString();

    }

    // errorMessage = 'something bad happened try again later';

    window.alert(errorMessage);

    return throwError(errorMessage);

  }

}
