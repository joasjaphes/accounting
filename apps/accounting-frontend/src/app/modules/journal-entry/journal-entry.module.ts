import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalEntryRoutingModule } from './journal-entry-routing.module';
import { JournalEntryComponent } from './journal-entry.component';


@NgModule({
  declarations: [
    JournalEntryComponent
  ],
  imports: [
    CommonModule,
    JournalEntryRoutingModule
  ]
})
export class JournalEntryModule { }
