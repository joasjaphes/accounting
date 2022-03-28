import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';
import { AddEditAccountComponent } from '../add-edit-account/add-edit-account.component';

@Component({
  selector: 'accounting-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  tableConfigurations: TableConfiguration = {
    tableColumns: [
      { name: 'name', label: 'Account Name' },
      { name: 'balance', label: 'Account Balance' }
    ]
  };
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.dialog.open(AddEditAccountComponent);
  }

}
