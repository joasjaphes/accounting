import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  savingData = false;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hasError(key: string, error: string): boolean {
    return this.loginForm.get(key).hasError(error);
  }

  touched(key: string): boolean {
    return this.loginForm.get(key).touched;
  }

  onLogin() {
    
  }
}
