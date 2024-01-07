import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
export interface TableConfiguration {
  columns: Column[];
  actions?: { [key: string]: boolean };
  emptyMessage?: string;
}

export interface Column {
  name: string;
  label: string;
  type: ColumType;
  format?: string;
}

export type ColumType = 'text' | 'number' | 'date' | 'currency';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() tableData = [];
  @Input() addButtonText = 'Add';
  @Input() showAddButton = true;
  @Input() tableConfiguration: TableConfiguration = {
    columns: [],
    actions: {},
  };
  @Output() add = new EventEmitter();
  displayedColumns: string[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('DataTableComponent initialized');
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('DataTableComponent changes', changes);
    this.init();
  }

  init() {
    this.displayedColumns = this.tableConfiguration.columns.map(
      (column) => column.name
    );
    this.displayedColumns.unshift('serial#');
    this.displayedColumns.push('actions');
  }

  onAdd() {
    this.add.emit();
  }
}
