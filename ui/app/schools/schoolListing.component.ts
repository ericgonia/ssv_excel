import { Component, OnInit } from '@angular/core';
import {School} from '../model/School';


@Component({
    moduleId: module.id,
    selector: 'school-listing',
    templateUrl: 'schoolListing.component.html'
})
export class SchoolListingComponent implements OnInit {
    public schools: School[] = [];

    constructor() { }

    ngOnInit() {
        
     }

}