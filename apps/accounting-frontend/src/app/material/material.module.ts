import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';



const modules = [
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  ReactiveFormsModule,
  MatIconModule,
  MatMenuModule,
  MatExpansionModule,
  MatTableModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [ ...modules],
  exports: [...modules],
})
export class MaterialModule {}
