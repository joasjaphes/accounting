import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Route[] = [
  {
    path: '',
    component: AccountsComponent,
  },
  {
    path: 'accounts',
    component: AccountsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralLedgerRoutingModule {}
