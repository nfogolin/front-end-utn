import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import ICountryResponse from "../interfaces/responses/ICountryResponse";

@Injectable({
    providedIn: 'root'
})

export class CountriesService{
    constructor(private http: HttpClient){

    }

    getCountries(){
        return this.http.post<ICountryResponse>(`${ environment.urlApiService}/Countries/GetCountries`, {CountryId : 1}).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}