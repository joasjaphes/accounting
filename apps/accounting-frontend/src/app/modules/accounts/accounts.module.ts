import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsComponent } from './accounts.component';
import { SharedModule } from '../../shared/shared.module';
import { AssetsComponent } from './assets/assets.component';
import { LiabilitiesComponent } from './liabilities/liabilities.component';
import { ShareHolderEquityComponent } from './share-holder-equity/share-holder-equity.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { IncomeComponent } from './income/income.component';


@NgModule({
  declarations: [
    AccountsComponent,
    AssetsComponent,
    LiabilitiesComponent,
    ShareHolderEquityComponent,
    ExpensesComponent,
    IncomeComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule { }
