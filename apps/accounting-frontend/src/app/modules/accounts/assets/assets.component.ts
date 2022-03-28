import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';

@Component({
  selector: 'accounting-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  tableConfigurations:TableConfiguration = {
    tableColumns:[
      {name:'name', label:'Account Name'},
      {name:'balance', label:'Account Balance'},
    ]
  } 

  // constructor() { }

  ngOnInit(): void {
    console.log
  }

  onAdd() {
    console.log('Adding');
  }

}
