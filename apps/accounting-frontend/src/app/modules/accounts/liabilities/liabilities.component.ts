import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';
import { AddEditAccountComponent } from '../add-edit-account/add-edit-account.component';

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
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.dialog.open(AddEditAccountComponent)
  }

}
