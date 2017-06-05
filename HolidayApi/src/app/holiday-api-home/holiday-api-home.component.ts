import { Component, OnInit } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";

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
  constructor(private HolidayApi :HolidayApiService) { }
  state:any;
  states = [
    { name: 'Arizona', abbrev: 'AZ' },
    { name: 'California', abbrev: 'CA' },
    { name: 'Colorado', abbrev: 'CO' },
    { name: 'New York', abbrev: 'NY' },
    { name: 'Pennsylvania', abbrev: 'PA' },
  ];
  OnChange(Month){
    this.MonthValue = Month;
  }
  onholiday(){
    this.HolidayApi.onHolidayCall(this.MonthValue)
    .subscribe((data)=>{
      setTimeout(()=>{
        console.log(this.MonthValue);
      this.HolidayData = data.holidays;
       console.log(this.HolidayData);
      },2000);
      console.log(data.holidays);
    })
  }
  trackByFn(index, holiday){
   return holiday.name;
  }
  ngOnInit() {
  }

}
