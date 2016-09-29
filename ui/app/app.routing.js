"use strict";
var router_1 = require('@angular/router');
var machineListing_component_1 = require('./machineInventory/machineListing.component');
var machineDetails_component_1 = require('./machineInventory/machineDetails.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/machines',
        pathMatch: 'full'
    },
    {
        path: 'machines',
        component: machineListing_component_1.MachineListingComponent
    },
    {
        path: 'machines/:id',
        component: machineDetails_component_1.MachineDetailsComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map