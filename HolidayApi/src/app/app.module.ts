import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

//Importing Browser Animations for running animations for angular-material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Importing all the necessary components from @angular/material
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdTabsModule, MdCardModule, MdSelectModule, MdGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HolidayApiHomeComponent } from './holiday-api-home/holiday-api-home.component';
import { HolidayApiInfoComponent } from './holiday-api-info/holiday-api-info.component';

//Importing and registering Custom Services 
import { HolidayApiService } from './holidayApi-Service/holiday-api-service';

//Importing Route Configuration from app-route-config.ts
import { AppRouteConfig } from './app-route-config';

@NgModule({
  declarations: [
    AppComponent,
    HolidayApiHomeComponent,
    HolidayApiInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   MdSidenavModule,
   MdToolbarModule,
    MdTabsModule,
   MdIconModule,
    MdCardModule,
    MdSelectModule,
    MdGridListModule,
    AppRouteConfig,
    HttpModule,
    FormsModule
  ],
  providers: [HolidayApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
