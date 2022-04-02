import { Component, Input, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../shared/animations/router-animation';
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

  routeElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
