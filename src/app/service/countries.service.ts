import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import COUNTRIES from '../common/urls';

@Injectable()
export class countriesService{
    constructor(private _http:HttpClient){

    }
    public getCountries():Observable<any>{
        return this._http.get(COUNTRIES);
    }
}