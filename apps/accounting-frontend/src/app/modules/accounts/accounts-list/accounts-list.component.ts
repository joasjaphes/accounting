import { Component, Input, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';

@Component({
  selector: 'accounting-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
  @Input() data = [];
  tableConfigurations:TableConfiguration = {
    tableColumns:[
      {name:'name', label:'Account Name'},
      {name:'balance', label:'Account Balance'},
    ]
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
