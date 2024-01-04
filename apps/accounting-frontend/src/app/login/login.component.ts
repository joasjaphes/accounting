import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  savingData = false;
  isWrongUserName = false;
  isWrongPassword = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
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

  async onLogin() {
    try {
      const credentials = this.loginForm.value;
      const user = await this.userService.login({
        username: credentials.email,
        password: credentials.password,
      });
      console.log('Logged in user', user);
    } catch (e) {
      if (e.error.message === 'Wrong username provided') {
        this.isWrongUserName = true;
        this.loginForm.get('email').setErrors({wrong:true});
      } else if (e.error.message === 'Wrong password provided') {
        this.isWrongPassword = true;
        this.loginForm.get('password').setErrors({wrong:true});

      }
      console.error('Failed to login', e);
    }
  }
}
