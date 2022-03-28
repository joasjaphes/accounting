import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TableConfiguration } from './tableconfiguration';
@Component({
  selector: 'accounting-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource = new MatTableDataSource([]);
  @Input() data = [];
  @Input() tableConfiguration: TableConfiguration = {
    tableColumns: [],
    actionIcons: {
      edit: false,
      delete: false,
      more: false
    }
  };
  displayedColumns:string[];

  constructor() {
    // this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit(): void {
    this.displayedColumns = ['position', ...this.tableConfiguration.tableColumns.map(column => column.name)];
  }

  ngAfterViewInit(): void {
    this.displayedColumns = ['position', ...this.tableConfiguration.tableColumns.map(column => column.name)];
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
