import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TableConfiguration } from '../../../shared/components/data-table/tableconfiguration';
import { AccountCategory } from '../accounts-categories';
import { AddEditAccountComponent } from '../add-edit-account/add-edit-account.component';

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
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.dialog.open(AddEditAccountComponent, {
      disableClose:true,
      data: {
        title:'share holder',
        accountKey:AccountCategory.SHARE_HOLDER_EQUITY
      }
    })
  }

}
