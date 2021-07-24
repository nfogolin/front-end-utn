import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import ICityResponse from "../interfaces/responses/ICityResponse";

@Injectable({
    providedIn: 'root'
})

export class CitiesService{
    constructor(private http: HttpClient){

    }

    getCities(ProvinceId:number){
        return this.http.post<ICityResponse>(`${ environment.urlApiService}/Cities/GetCities`, {ProvinceId : ProvinceId}).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}