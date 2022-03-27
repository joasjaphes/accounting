import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MaterialModule } from '../modules/material/material.module';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageHeaderComponent,
    PageLayoutComponent
  ]
})
export class SharedModule { }
