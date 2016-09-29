"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Machine_1 = require('../model/Machine');
var School_1 = require('../model/School');
var MachineListingComponent = (function () {
    function MachineListingComponent() {
        this.machines = [];
    }
    MachineListingComponent.prototype.ngOnInit = function () {
        var newMachine = new Machine_1.Machine();
        newMachine.id = 1;
        newMachine.school = new School_1.School();
        newMachine.school.name = "Stephens Elementary";
        this.machines.push(newMachine);
        newMachine = new Machine_1.Machine();
        newMachine.id = 1;
        newMachine.school = new School_1.School();
        newMachine.school.name = "Mabelvale Elementary";
        this.machines.push(newMachine);
    };
    MachineListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'machine-listing',
            templateUrl: 'machineListing.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], MachineListingComponent);
    return MachineListingComponent;
}());
exports.MachineListingComponent = MachineListingComponent;
//# sourceMappingURL=machineListing.component.js.map