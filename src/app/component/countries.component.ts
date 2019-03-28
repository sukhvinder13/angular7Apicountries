import { Component } from "@angular/core";
import { countriesService } from '../service/countries.service';
import errCallBack from '../common/errCallback';

@Component({
    selector: "app-countries",
    templateUrl  :"./countries.component.html"
})
export class countriesComponent{
        private result:any;
        constructor(private _service:countriesService){}
            ngOnInit(){
                this._service.getCountries().subscribe((response)=>{
                    this.result=response;
                },errCallBack)
            }
}