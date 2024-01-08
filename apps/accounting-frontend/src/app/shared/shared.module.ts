import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SaveButtonComponent } from './components/save-button/save-button.component';

const modules = [MaterialModule, HttpClientModule, CommonModule];
const components = [];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules, SaveButtonComponent],
  exports: [...modules, ...components, SaveButtonComponent],
})
export class SharedModule {}
