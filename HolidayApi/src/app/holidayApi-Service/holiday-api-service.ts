import { Injectable } from '@angular/core';
//importing Http services from @angular/http
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class HolidayApiService {
    constructor(private HolidayApiHttp : Http){}

    onHolidayCall(Month:any){
        const headers = new Headers({'content-type':'application/json'});
        let Params : URLSearchParams = new URLSearchParams();
        Params.set('key','8174867e-d91d-46a4-b5eb-c5a9579406d4');
        Params.set('country','US');
        Params.set('year','2015');
        Params.set('month',Month),
        Params.set('pretty','true');
        let requestOptions = new RequestOptions();
        requestOptions.search = Params;       
        const url ='https://holidayapi.com/v1/holidays';
        // return this.HolidayApiHttp.get('https://holidayapi.com/v1/holidays?key=&country=US&&year=2015&month='+monthvalue+'&pretty=true')
        return this.HolidayApiHttp.get(url,requestOptions)
        .map((response:Response)=>{
            const Data = response.json();
            return Data;
        })
    }
}
