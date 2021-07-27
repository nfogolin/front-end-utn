import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { timeout } from "rxjs/operators";
import IPriceListsResponse from "../interfaces/responses/IPriceListsResponse";

@Injectable({
    providedIn: 'root'
})

export class PriceListsService{
    constructor(private http: HttpClient){

    }

    getPriceLists(){
        return this.http.post<IPriceListsResponse>(`${ environment.urlApiService}/PriceList/GetPriceLists`, {}).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}