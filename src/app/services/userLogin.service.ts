import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import IAuthorizationResponse from "../interfaces/responses/IAuthorizationResponse";

@Injectable({
    providedIn: 'root'
})

export class UserLoginService{
    constructor(private http: HttpClient){

    }

    userLogin(formLoginUser:{}){
        return this.http.post<IAuthorizationResponse>(`${ environment.urlApiService}/Authorization/AuthorizationUser`, formLoginUser).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}