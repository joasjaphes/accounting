import { Component, OnInit } from '@angular/core';
import { menus } from './menus';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { loadAccounts } from '../store/accounts/accounts.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  userName = '';
  menus = menus;
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('accounting-user'));
    this.userName = `${user.firstName} ${user.surname}`;
    this.store.dispatch(loadAccounts());
  }
}
