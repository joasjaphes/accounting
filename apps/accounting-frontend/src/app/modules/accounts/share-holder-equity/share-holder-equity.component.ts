import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';

@Component({
  selector: 'accounting-share-holder-equity',
  templateUrl: './share-holder-equity.component.html',
  styleUrls: ['./share-holder-equity.component.scss']
})
export class ShareHolderEquityComponent implements OnInit {
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
