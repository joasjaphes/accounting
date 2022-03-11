import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'accounting-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor() {
    console.log();
  }

  ngOnInit(): void {
    console.log();
  }

}
