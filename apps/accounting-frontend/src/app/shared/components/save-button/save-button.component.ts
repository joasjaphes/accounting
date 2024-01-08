import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-save-button',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.css',
})
export class SaveButtonComponent {
  @Input() disabled = false;
  @Input() saveLabel = 'Save';
  @Input() cancelLabel = 'Cancel';
  @Input() showCancel = true;
  @Input() confirmFirst = false;
  @Input() confirmMessage = 'Are you sure you want to save?';
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  showConfirmation = false;
  constructor() {}

  onSave(confirming = false) {
    if (this.confirmFirst && !confirming) {
      this.showConfirmation = true;
      return;
    } else {
      this.showConfirmation = false;
      this.save.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
