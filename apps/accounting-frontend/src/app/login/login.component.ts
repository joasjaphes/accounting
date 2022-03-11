import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom, Observable, of } from 'rxjs';
import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'accounting-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loginError$:Observable<string>;

  constructor(private formBuilder:FormBuilder, private http:HttpClientService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password:['', Validators.required]
    })
  }

  ngOnInit(): void {
    console.log();
  }

  async login() {
    this.loginError$ = of();
    const credentials = this.loginForm.value;
    try {
      await firstValueFrom(this.http.post('api/auth/signin', credentials)); 
    }catch(e:unknown) {
      const errorObject: HttpErrorResponse = <HttpErrorResponse> e;
      this.loginError$ = of(errorObject.error.message);
    } 
  }

}
