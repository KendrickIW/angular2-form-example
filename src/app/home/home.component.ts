import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent {

    myForm = new FormGroup({
        name: new FormControl("", Validators.required)
    });
}
