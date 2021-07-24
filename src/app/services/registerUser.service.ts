import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import IRegisterUserResponse from "../interfaces/responses/IRegisterUserResponse";
import IUpdatePasswordResponse from "../interfaces/responses/IUpdatePasswordResponse";

@Injectable({
    providedIn: 'root'
})

export class RegisterUserService{
    constructor(private http: HttpClient){

    }

    registerUser(params:{}){
        return this.http.post<IRegisterUserResponse>(`${ environment.urlApiService}/Users/CreateUser`, params).pipe(
            timeout(environment.timeOutRequest)
        );
    }

    updatePassword(params:{}){
        return this.http.put<IUpdatePasswordResponse>(`${ environment.urlApiService}/Users/UpdatePassword`, params).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}