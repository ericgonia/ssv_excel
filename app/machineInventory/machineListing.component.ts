import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/Machine';


@Component({
    moduleId: module.id,
    selector: 'machine-listing',
    templateUrl: 'machineListing.component.html'
})
export class MachineListing implements OnInit {
    public machines: Machine[] = [];

    constructor() { }

    ngOnInit() {
        var newMachine = new Machine();
        newMachine.school = "Stephens Elementary";
        this.machines.push(newMachine);
        newMachine = new Machine();
        newMachine.school = "Mabelvale Elementary";
        this.machines.push(newMachine);
     }

}