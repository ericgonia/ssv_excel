import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/Machine';
import {School} from '../model/School';


@Component({
    moduleId: module.id,
    selector: 'machine-listing',
    templateUrl: 'machineListing.component.html'
})
export class MachineListingComponent implements OnInit {
    public machines: Machine[] = [];

    constructor() { }

    ngOnInit() {
        var newMachine = new Machine();
        newMachine.id = 1;
        newMachine.school = new School();
        newMachine.school.name = "Stephens Elementary";
        this.machines.push(newMachine);
        newMachine = new Machine();
        newMachine.id = 1;
        newMachine.school = new School();
        newMachine.school.name = "Mabelvale Elementary";
        this.machines.push(newMachine);
     }

}