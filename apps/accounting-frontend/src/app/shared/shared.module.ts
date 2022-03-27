import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MaterialModule } from '../modules/material/material.module';



@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageHeaderComponent
  ]
})
export class SharedModule { }
