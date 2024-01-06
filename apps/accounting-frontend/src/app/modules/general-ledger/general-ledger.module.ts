import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';

@NgModule({
  declarations: [AccountsComponent],
  imports: [CommonModule, GeneralLedgerRoutingModule],
})
export class GeneralLedgerModule {}
