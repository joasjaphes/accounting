import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css',
})
export class AccountsComponent implements OnInit{
  tableConfiguration:TableConfiguration = {
    columns: [
      {
        name:'name',
        label:'Name',
        type:'text'
      },
      {
        name:'description',
        label:'Description',
        type:'text'
      },
      {
        name:'accountType',
        label:'Account Type',
        type:'text'
      }
    ]
  }
  accounts = [];
  viewDetails = false;
  formTitle = 'Add Account';
  formDescription = 'Add a new account';
  constructor() {}
  ngOnInit(): void {
    console.log('AccountsComponent initialized');
  }

  addAccount() {
    this.viewDetails = true;
    console.log('Add Account');
  }

  closeForm() {
    this.viewDetails = false;
  }
}
