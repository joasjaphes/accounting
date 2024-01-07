import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { formSize, tableSize } from '../../animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.css',
  animations: [tableSize, formSize],
  standalone:true,
  imports:[CommonModule, MaterialModule]
})
export class PageLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() viewDetails = false;
  @Input() formTitle = '';
  @Input() formDescription = '';
  @Output() closeForm = new EventEmitter();
  ngOnInit(): void {
    console.log('View Details', this.viewDetails);
    console.log('PageLayoutComponent initialized');
  }

  onCloseForm() {
    this.closeForm.emit();
  }
}
