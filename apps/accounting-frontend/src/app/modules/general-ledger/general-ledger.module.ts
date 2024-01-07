import { NgModule } from '@angular/core';
import { AccountsComponent } from './accounts/accounts.component';
import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from '../../shared/components/page-layout/page-layout.component';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
// import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [GeneralLedgerRoutingModule,CommonModule, PageLayoutComponent,DataTableComponent],
})
export class GeneralLedgerModule {}
