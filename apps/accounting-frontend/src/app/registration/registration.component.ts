import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  savingData = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      companyName: ['', Validators.required],
      password: '',
      confirmPassword: '',
    });
  }

  hasError(key: string, error: string): boolean {
    return this.registrationForm.get(key).hasError(error);
  }

  touched(key: string): boolean {
    return this.registrationForm.get(key).touched;
  }

  async onSubmit() {
    this.savingData = true;
    try {
      const data = this.registrationForm.value;
      // simulate a network request that takes 5 seconds
      setTimeout(() => {
        this.savingData = false;
        this.router.navigate(['login']);
        console.log(data);
      }, 5000);
    } catch (e) {
      console.error(e);
    }
  }
}
