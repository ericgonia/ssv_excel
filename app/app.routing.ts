import { Routes, RouterModule } from '@angular/router';

import { MachineListingComponent } from './machineInventory/machineListing.component';
import { MachineDetailsComponent } from './machineInventory/machineDetails.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/machines',
    pathMatch: 'full'
  },
  {
    path: 'machines',
    component: MachineListingComponent
  },
  {
    path: 'machines/:id',
    component: MachineDetailsComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);