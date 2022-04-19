import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fadeIn, ROUTE_ANIMATIONS_ELEMENTS } from '../shared/animations/router-animation';
import { FieldSize, FormConfig, InputType } from '../shared/components/custom-form/form-config';
import { confirmPassword } from '../shared/validators/confirm-pass';
import { go } from '../store/actions/router.actions';
import { User } from '../store/models/user.model';
import { AppState } from '../store/reducers';

@Component({
  selector: 'accounting-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [fadeIn]
})
export class RegistrationComponent implements OnInit {
  loading = false;
  routeElements = ROUTE_ANIMATIONS_ELEMENTS;
  formFields: FormConfig[] = [];
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.formFields = [
      {
        key: 'firstname',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.FULL,
        placeholder: 'first name',
        icon: 'person',
        validators:[Validators.required],
        errors: [{key:'required', message:'*This field is required'}]
      },
      {
        key: 'surname',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.FULL,
        placeholder: 'surname',
        icon: 'person',
        errors: []
      },
      {
        key: 'lastname',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.FULL,
        placeholder: 'last name',
        icon: 'person',
        validators:[Validators.required],
        errors: [{key:'required', message:'*This field is required'}]
      },
      {
        key: 'email',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.HALF,
        placeholder: 'email',
        icon: 'email',
        errors: []
      },
      {
        key: 'phoneNumber',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.HALF,
        placeholder: 'phone number',
        icon: 'call',
        errors: []
      },
      {
        key: 'username',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.FULL,
        validators: [Validators.required],
        placeholder: 'username',
        icon: 'person',
        errors: [{ key: 'required', message: '*This field is required' }]
      },
      {
        key: 'password',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.HALF,
        validators: [Validators.required],
        placeholder: 'password',
        icon: 'lock',
        errors: [{ key: 'required', message: '*This field is required' }]
      },
      {
        key: 'confirmPass',
        value: '',
        type: InputType.TEXT,
        fieldSize: FieldSize.HALF,
        validators: [Validators.required],
        placeholder: 'confirm password',
        icon: 'lock',
        errors: [{ key: 'required', message: '*This field is required' }]
      },
    ];
  }

  onSave(formData) {
    try {
      console.log('form data', formData)
    } catch (e) {

    }
  }

  onCancel() {
    this.store.dispatch(go({route:{path:['/login']}}));
  }

  // get passwordMissmatch() {
  //   return this.registrationForm.get('confirmPass').touched && this.registrationForm.hasError('confirmPass');
  // }

}
