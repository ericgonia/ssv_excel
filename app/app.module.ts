import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MachineListing } from './machineInventory/machineListing.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MachineListing ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
