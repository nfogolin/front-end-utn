import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import IProvinceResponse from "../interfaces/responses/IProvinceResponse";

@Injectable({
    providedIn: 'root'
})

export class ProvincesService{
    constructor(private http: HttpClient){

    }

    getProvinces(CountryId:number){
        return this.http.post<IProvinceResponse>(`${ environment.urlApiService}/Provinces/GetProvinces`, {CountryId : CountryId}).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}