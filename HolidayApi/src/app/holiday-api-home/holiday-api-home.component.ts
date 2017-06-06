import { Component, OnInit } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import { Router, ActivatedRoute } from '@angular/router';

import { HolidayApiService } from '../holidayApi-Service/holiday-api-service';
@Component({
  selector: 'holiday-api-holiday-api-home',
  templateUrl: './holiday-api-home.component.html',
  styleUrls: ['./holiday-api-home.component.css']
})
export class HolidayApiHomeComponent implements OnInit {
  HolidayData :any;  
  months:any= ['Select a  Month',1,2,3,4,5,6,7,8,9,10,11,12];
  MonthValue: any = this.months[0];
  constructor(private HolidayApi :HolidayApiService, private HolidayInfoActiveRoute : ActivatedRoute, private HolidayInfoRoute : Router) { }  
  OnChange(Month){
    this.MonthValue = Month;
    this.HolidayApi.onHolidayCall(this.MonthValue)
      .subscribe((data) => {       
          this.HolidayData = data.holidays;
          console.log(this.HolidayData);     
      });
  }
  OnholidayInfo(Holiday){
    const publicHoliday = Holiday.public === true ? 'It is a public Holiday' : 'It is not a public holiday';
    this.HolidayInfoRoute.navigate(['HolidayApiInfo', Holiday.date, Holiday.name, publicHoliday],{relativeTo:this.HolidayInfoActiveRoute});
  }  
  ngOnInit() {
  }

}
