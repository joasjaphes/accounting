import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';

const modules = [MaterialModule, HttpClientModule, CommonModule];
const components = [];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
