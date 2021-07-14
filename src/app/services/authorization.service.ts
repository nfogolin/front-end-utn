import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthorizationService {
    constructor(){

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
}