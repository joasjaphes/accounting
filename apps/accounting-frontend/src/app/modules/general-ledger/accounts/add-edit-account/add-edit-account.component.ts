import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  constructor(private formBuilder: FormBuilder) {}
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
      console.log('Account', account);
    } catch (e) {
      console.error('Failed to save account', e);
    }
  }

  onCloseForm() {
    this.closeForm.emit();
  }
}
