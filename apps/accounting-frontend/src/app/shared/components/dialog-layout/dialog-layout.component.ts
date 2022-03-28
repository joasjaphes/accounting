import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accounting-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss']
})
export class DialogLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() icon;
  constructor() { }

  ngOnInit(): void {
  }

}
