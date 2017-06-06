import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'holiday-api-holiday-api-info',
  templateUrl: './holiday-api-info.component.html',
  styleUrls: ['./holiday-api-info.component.css']
})
export class HolidayApiInfoComponent implements OnInit {
   HolidayInfo:{name:string, date:Date, Public:string}
  constructor(private HolidayinfoActiveRoute: ActivatedRoute, private HolidayRoute: Router) { }
  
  ngOnInit() {
    this.HolidayInfo ={
      name : this.HolidayinfoActiveRoute.snapshot.params['name'],
      date: this.HolidayinfoActiveRoute.snapshot.params['Date'],
      Public: this.HolidayinfoActiveRoute.snapshot.params['public']
    };
    console.log(this.HolidayInfo.name);
  
  }
}
