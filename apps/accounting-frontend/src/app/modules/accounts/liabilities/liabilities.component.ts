import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';
import { AccountCategory } from '../accounts-categories';
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
    this.dialog.open(AddEditAccountComponent, {
      disableClose:true,
      data: {
        title:'liability',
        accountKey:AccountCategory.LIABILITY
      }
    })
  }

}
