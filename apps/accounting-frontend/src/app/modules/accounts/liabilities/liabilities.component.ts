import { Component, OnInit } from '@angular/core';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';

@Component({
  selector: 'accounting-liabilities',
  templateUrl: './liabilities.component.html',
  styleUrls: ['./liabilities.component.scss']
})
export class LiabilitiesComponent implements OnInit {
  tableConfigurations: TableConfiguration = {
    tableColumns: [
      { name: 'name', label: 'Account Name' },
      { name: 'balance', label: 'Account Balance' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
