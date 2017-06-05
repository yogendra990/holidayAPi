import { Injectable } from '@angular/core';
//importing Http services from @angular/http
import { Http, Headers, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class HolidayApiService {
    constructor(private HolidayApiHttp : Http){}

    onHolidayCall(country:string,Year:number){
        const headers = new Headers({'content-type':'application/json'});
       return this.HolidayApiHttp.get('https://holidayapi.com/v1/holidays?key=8174867e-d91d-46a4-b5eb-c5a9579406d4&country=US&&year=2016')
        .map((response:Response)=>{
            const Data = response.json();
            return Data;
        })
    }
}
