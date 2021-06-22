import{Injectable}from '@angular/core'
import{HttpEvent,HttpInterceptor,HttpHandler,HttpRequest, HttpErrorResponse, HttpResponse}from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import{environment} from '../environments/environment.prod';
import{catchError, map}from 'rxjs/Operators'
import{ErroresponseService}from './error/erroresponse.service'
@Injectable()
export class AuthheaderInterceptor implements HttpInterceptor{

    constructor(private errorresponseService:ErroresponseService){

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        
        const url=request.clone({url:environment.baseUrl+request.url});

        return next.handle(url).pipe(map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
          }
          return event;
        }), 
        catchError((error: HttpErrorResponse) => {
              

            let data = {};
            data = {
                reason: error && error.error && error.error.reason ? error.error.reason : 'unCaught error',
                status: error.status
            };
           this.errorresponseService.openDialog(data);
           
            return throwError(error);
        }));
    }

}