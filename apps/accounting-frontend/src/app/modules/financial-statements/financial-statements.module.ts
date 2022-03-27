import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialStatementsRoutingModule } from './financial-statements-routing.module';
import { FinancialStatementsComponent } from './financial-statements.component';


@NgModule({
  declarations: [
    FinancialStatementsComponent
  ],
  imports: [
    CommonModule,
    FinancialStatementsRoutingModule
  ]
})
export class FinancialStatementsModule { }
