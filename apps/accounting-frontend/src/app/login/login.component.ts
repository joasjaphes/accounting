import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'accounting-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log();
  }

  login() {
    console.log('credentials', this.loginForm.value);
  }

}
