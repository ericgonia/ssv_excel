import { Routes, RouterModule } from '@angular/router';

import { SchoolListingComponent } from './schools/schoolListing.component';
import { SchoolDetailsComponent } from './schools/schoolDetails.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/schools',
    pathMatch: 'full'
  },
  {
    path: 'schools',
    component: SchoolListingComponent
  },
  {
    path: 'schools/:id',
    component: SchoolDetailsComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes);