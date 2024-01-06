import { Component, OnInit } from '@angular/core';
import { menus } from './menus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userName = '';
  menus = menus;
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('accounting-user'));
    this.userName = `${user.firstName} ${user.surname}`;
  }
}
