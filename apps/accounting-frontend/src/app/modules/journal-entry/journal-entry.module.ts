import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalEntryRoutingModule } from './journal-entry-routing.module';
import { JournalEntryComponent } from './journal-entry.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    JournalEntryComponent
  ],
  imports: [
    CommonModule,
    JournalEntryRoutingModule,
    SharedModule
  ]
})
export class JournalEntryModule { }
