import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'accounting-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class AddEditAccountComponent implements OnInit {

  accountForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      name:['',Validators.required],
      description:[''],
      balance:['', Validators.required]
    })
  }

}
