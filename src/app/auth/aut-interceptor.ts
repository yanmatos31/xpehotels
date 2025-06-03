import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'meu-token';
        const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(authReq);
    }
}{
        
}