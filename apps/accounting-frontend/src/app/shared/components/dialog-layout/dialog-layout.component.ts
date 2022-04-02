import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'accounting-dialog-layout',
  templateUrl: './dialog-layout.component.html',
  styleUrls: ['./dialog-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() icon;
  constructor() { }

  ngOnInit(): void {
  }

}
