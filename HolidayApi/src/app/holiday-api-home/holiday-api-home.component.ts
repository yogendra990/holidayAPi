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
  constructor(private HolidayApi :HolidayApiService) { }

  onholiday(){
    this.HolidayApi.onHolidayCall('US',2016)
    .subscribe((data)=>{
      setTimeout(()=>{
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
