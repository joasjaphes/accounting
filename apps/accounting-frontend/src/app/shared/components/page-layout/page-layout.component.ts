import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'accounting-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  @Input() title = '';
  @Input() icon;

  // constructor() { }

  ngOnInit(): void {
    console.log
  }

}
