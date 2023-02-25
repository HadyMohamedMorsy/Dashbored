import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { catchError, exhaustMap, Observable, switchMap, throwError, take } from 'rxjs';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { User } from '../global-services/user-modal';
@Injectable()
export class HandlerRequestInterceptor implements HttpInterceptor {

  constructor(private AuthService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.AuthService.EmitsDataForUser.pipe(
        take(1),
        switchMap(res => {
          if(!res){
            return next.handle(request).pipe(catchError(this.HandlerError));
          }else{
            let authorization = res.token;
            const RequestHandler = request.clone(
              {
                headers : request.headers.set('Authorization',`Bearer ${authorization}`),
              }
            )

            return next.handle(RequestHandler).pipe(catchError(this.HandlerError));
          }

        })

    );
  }

  private HandlerError(err : HttpErrorResponse) {
    let ErrorRequest = "";
    switch(err.status){
      case 400  :
        ErrorRequest = "Bad Request invalid request, such as lacking required request body or parameter";
        break;
      case 401  :
        ErrorRequest = "Unauthorized _failed to authenticate with the server";
        break;
      case 403  :
        ErrorRequest = "Forbidden_authenticated but does not have permission to access the requested resource";
        break;
      case 404  :
        ErrorRequest = "Not Found_the requested resource does not exist";
        break;
      case 412  :
        ErrorRequest = "Precondition Failed Precondition Failed  one or more conditions in the request header fields evaluated to false";
        break;
      case 500  :
        ErrorRequest = "Internal Server Error – a generic error occurred on the server";
        break;
      case 503  :
        ErrorRequest = "Service Unavailable – the requested service is not available";
        break;
        default :
        ErrorRequest = "Internal Server Error – a generic error occurred on the server"
    }
    return throwError(()=> ErrorRequest);
  }
}
