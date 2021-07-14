import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import ICompanyResponse from "../interfaces/responses/ICompanyResponse";
import { environment } from "src/environments/environment";
import { timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CompanyDataService {

    constructor(private http: HttpClient){

    }

    getDataCompany(){
        return this.http.post<ICompanyResponse>(`${ environment.urlApiService}/Company/GetCompany`, {}).pipe(
            timeout(environment.timeOutRequest)
        );
    }
}