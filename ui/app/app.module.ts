import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { SchoolListingComponent } from './schools/schoolListing.component';
import { SchoolDetailsComponent } from './schools/schoolDetails.component';

@NgModule({
  imports:      [ BrowserModule,
                  routing ],
  declarations: [ AppComponent,
                  SchoolListingComponent,
                  SchoolDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
