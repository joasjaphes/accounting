import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userName = '';
  ngOnInit(): void {
      const user = JSON.parse(localStorage.getItem('accounting-user'));
      this.userName = `${user.firstName} ${user.surname}`;
  }
}
