import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';
import { AccountCategory } from '../accounts-categories';
import { AddEditAccountComponent } from '../add-edit-account/add-edit-account.component';

@Component({
  selector: 'accounting-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  tableConfigurations: TableConfiguration = {
    tableColumns: [
      { name: 'name', label: 'Account Name' },
      { name: 'balance', label: 'Account Balance' },
    ]
  };

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    console.log;
  }

  onAdd() {
    this.dialog.open(AddEditAccountComponent,{
      disableClose:true,
      data: {
        title:'asset',
        accountKey:AccountCategory.ASSET,
      }
    });

    this.dialog.afterAllClosed.subscribe((observer) => {
      console.log('observer', observer);
    })
  }

  onClose() {
  }

}
