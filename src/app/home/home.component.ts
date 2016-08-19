import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {

    searchControl = new FormControl("", Validators.required);
    myForm = new FormGroup({
        searchControl: this.searchControl
    });
}
