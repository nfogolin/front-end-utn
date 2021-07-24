import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable()

export class ConnectionIdInterceptor{
    constructor(){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler):Observable<HttpEvent<unknown>>{
        const connectionId:string = environment.connectionId;
        if (connectionId){
            request = request.clone({
                headers: request.headers?.set('connectionId', connectionId)
            });
        };

        request.clone({
            headers: request.headers?.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) =>{
                return event;
            })
        );
    }
}