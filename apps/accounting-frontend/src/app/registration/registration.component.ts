import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeIn, ROUTE_ANIMATIONS_ELEMENTS } from '../shared/animations/router-animation';
import { confirmPassword } from '../shared/validators/confirm-pass';
import { User } from '../store/models/user.model';

@Component({
  selector: 'accounting-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations:[fadeIn]
})
export class RegistrationComponent implements OnInit {
  loading = false;
  registrationForm:FormGroup;
  routeElements = ROUTE_ANIMATIONS_ELEMENTS;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstname:[''],
      surname:[''],
      lastname:[''],
      email:[''],
      phoneNumber:[''],
      username:['', Validators.required],
      password:['', Validators.required],
      confirmPass:['', Validators.required],
    } , {validators: confirmPassword})
  }

  onSave() {
    console.log('confirm pass',this.registrationForm.hasError('confirmPass'))
    try{
      const formData = this.registrationForm.value;
    }catch(e) {

    }
  }

  get passwordMissmatch() {
    return this.registrationForm.get('confirmPass').touched && this.registrationForm.hasError('confirmPass');
  }

}
