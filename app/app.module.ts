import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { MachineListingComponent } from './machineInventory/machineListing.component';
import { MachineDetailsComponent } from './machineInventory/machineDetails.component';

@NgModule({
  imports:      [ BrowserModule,
                  routing ],
  declarations: [ AppComponent,
                  MachineListingComponent,
                  MachineDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
