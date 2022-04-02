import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppMenu } from '../../../app-menus';

@Component({
  selector: 'accounting-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() icon;
  @Input() showAdd = false;
  @Input() menus:AppMenu[] = [];
  @Output() add = new EventEmitter();

  // constructor() { }

  ngOnInit(): void {
    console.log
  }

  onAdd() {
    this.add.emit();
  }

}
