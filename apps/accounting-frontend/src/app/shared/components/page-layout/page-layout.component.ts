import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  exportAs: 'pageLayout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css',
})
export class PageLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  ngOnInit(): void {
    console.log('PageLayoutComponent initialized');
  }
}
