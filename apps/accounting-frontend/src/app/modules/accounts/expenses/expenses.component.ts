import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';

@Component({
  selector: 'accounting-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
 tableConfigurations:TableConfiguration = {
   tableColumns:[
     {name:'name',label:'Account Name'},
     {name:'balance',label:'Account Balance'}
   ]
 }
  constructor() { }

  ngOnInit(): void {
  }

}
