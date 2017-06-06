import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Importing the routing configuration from @angular/router
import { Routes, RouterModule } from '@angular/router';
//Importing Browser Animations for running animations for angular-material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importing all the necessary components from @angular/material
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HolidayApiHomeComponent } from './holiday-api-home/holiday-api-home.component';
import { HolidayApiInfoComponent } from './holiday-api-info/holiday-api-info.component';

const HolidayApiRouteConfig : Routes =[{path:'',component:HolidayApiHomeComponent},
                                      {path:'HolidayApiInfo/:Date/:name/:public',component:HolidayApiInfoComponent}];
@NgModule({
    imports:[RouterModule.forRoot(HolidayApiRouteConfig)],
    exports:[RouterModule]
})
export class AppRouteConfig {
}
