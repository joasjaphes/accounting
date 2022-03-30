import { Component, Inject, Injectable, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from '../../../store/models/account.model';

@Component({
  selector: 'accounting-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditAccountComponent implements OnInit {

  accountForm: FormGroup;
  currentAccount: Account;
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: { title: string, accountKey: string, currentAccount: Account; }) { }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      balance: ['', Validators.required],
      status: ['']
    });
    if (this.data.currentAccount) {
      this.currentAccount = this.data.currentAccount;
      this.accountForm.patchValue({
        name: this.currentAccount.name,
        description: this.currentAccount.description,
        balance: this.currentAccount.balance,
        status: this.currentAccount.status
      });
    }
  }

  onClose() {
    this.dialog.closeAll();
  }

  onSave() {
    this.dialog.closeAll();
  }

}
