import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import IValidateTokenResponse from "../interfaces/responses/IValidateTokenResponse";
import { DataServices } from "./dataServices.service";
import { ValidateTokenService } from "./validateToken.service";

@Injectable({
    providedIn: 'root'
})

export class AuthorizationService {

    constructor(private validateTokenService: ValidateTokenService
            , private dataServices: DataServices){

    }

    authState = new BehaviorSubject(false);

    setAutenticate(){
        this.authState.next(true);
    }

    isAuthenticate(){
        return this.authState.value;
    }

    dropAuthenticate(){
        localStorage.removeItem("x-token");
        this.authState.next(false);
    }

    async reactivateAuth(){
        if (this.authState.value == false){

            const token = localStorage.getItem("x-token");

            /*if(token){
                this.validateTokenService.validateToken().subscribe(rsp =>{
                    if(!rsp.Error){
                        this.authState.next(true);
                        console.log('Activa');
                        this.dataServices.userName = 'Bienvenido ' + rsp.User[0].sUserNameReal;
                    }
                }, (e)=>{
                
                })
            };*/

            if(token){
                await this.validateTokenService.validateTokenAsync().then(rsp =>{
                    if(!rsp.Error){
                        this.setAutenticate();
                        console.log('Activa');
                        this.dataServices.userName = 'Bienvenido ' + rsp.User[0].sUserNameReal;
                    }
                });
            };
        }
        
        return new Promise((resolve, reject) => {
            resolve(this.isAuthenticate());
        });
    }
}