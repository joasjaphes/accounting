import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store';
import { upsertAccount } from '../../../../store/accounts/accounts.actions';
import { CommonService } from '../../../../services/common.service';
import { AccountService } from '../../../../services/accounts.service';
import { Account } from '../../../../store/accounts/account.model';

@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrl: './add-edit-account.component.css',
})
export class AddEditAccountComponent implements OnInit {
  accountForm: FormGroup;
  categories = [
    {
      name: 'Asset',
      value: 'asset',
    },
    {
      name: 'Liability',
      value: 'liability',
    },
    {
      name: 'Equity',
      value: 'equity',
    },
    {
      name: 'Revenue',
      value: 'revenue',
    },
    {
      name: 'Expense',
      value: 'expense',
    },
  ];
  @Output() closeForm = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private commonService: CommonService,
    private accountService: AccountService
  ) {}
  ngOnInit(): void {
    console.log('AddEditAccountComponent initialized');
    this.initForm();
  }

  initForm() {
    this.accountForm = this.formBuilder.group({
      name: '',
      description: '',
      category: '',
    });
  }

  async onSave() {
    try {
      const account = this.accountForm.value;
      const id = this.commonService.makeId();
      const accountPayload: Account = {
        id,
        ...account,
      };
      await this.accountService.saveAccount(accountPayload);
      this.store.dispatch(upsertAccount({ account: accountPayload }));
      this.onCloseForm();
    } catch (e) {
      console.error('Failed to save account', e);
    }
  }

  onCloseForm() {
    this.closeForm.emit();
  }
}
