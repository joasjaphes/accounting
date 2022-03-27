import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { MaterialModule } from '../modules/material/material.module';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { SingleMenuCardComponent } from './components/single-menu-card/single-menu-card.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageLayoutComponent,
    SingleMenuCardComponent,
    MenuListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    PageHeaderComponent,
    PageLayoutComponent,
    SingleMenuCardComponent,
    MenuListComponent
  ]
})
export class SharedModule { }
