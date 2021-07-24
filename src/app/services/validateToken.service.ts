import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import IValidateTokenResponse from "../interfaces/responses/IValidateTokenResponse";

@Injectable({
    providedIn: 'root'
})

export class ValidateTokenService{
    constructor(private http: HttpClient){

    }

    validateToken(){
        return this.http.post<IValidateTokenResponse>(`${ environment.urlApiService}/Token/ValidateToken`, {}).pipe(
            timeout(environment.timeOutRequest)
        );
    }

    validateTokenAsync(){
        return this.http.post<IValidateTokenResponse>(`${ environment.urlApiService}/Token/ValidateToken`, {}).pipe(
            timeout(environment.timeOutRequest)
        ).toPromise();
    }
}