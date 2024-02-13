import { Component, OnInit } from '@angular/core';
import { menus } from './menus';
import { Store } from '@ngrx/store';
import { AppState } from '../store';
import { loadAccounts } from '../store/accounts/accounts.actions';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSidenavModule} from '@angular/material/sidenav'
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[MatExpansionModule,MatSidenavModule,RouterModule,NgIf,NgFor,MatIconModule,MatMenuModule],
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
