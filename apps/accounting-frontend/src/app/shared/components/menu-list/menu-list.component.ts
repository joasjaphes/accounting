import { Component, Input, OnInit } from '@angular/core';
import { AppMenu } from '../../../app-menus';

@Component({
  selector: 'accounting-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  @Input() menus:AppMenu[] = [];

  // constructor() { }

}
