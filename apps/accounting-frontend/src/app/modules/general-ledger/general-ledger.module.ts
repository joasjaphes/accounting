import { NgModule } from '@angular/core';
import { AccountsComponent } from './accounts/accounts.component';
import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';
// import { CommonModule } from '@angular/common';
import { AddEditAccountComponent } from './accounts/add-edit-account/add-edit-account.component';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SharedModule } from '../../shared/shared.module';
import { SharedModule } from '../../shared/shared.module';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';

@NgModule({
  declarations: [AccountsComponent, AddEditAccountComponent],
  imports: [
    SharedModule,
    CommonModule,
    GeneralLedgerRoutingModule,
    DataTableComponent,
    PageLayoutComponent
  ],
})
export class GeneralLedgerModule {}
