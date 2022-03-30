import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../../store/models/user.model';
import { AppMenu } from '../../app-menus';
import { routeAnimations, ROUTE_ANIMATIONS_ELEMENTS } from '../../shared/animations/router-animation';

@Component({
  selector: 'accounting-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  animations:[routeAnimations],
  encapsulation: ViewEncapsulation.None
})
export class MainNavComponent {

  routeAnimations = ROUTE_ANIMATIONS_ELEMENTS;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @Input() currentUser: User;
  @Input() menus: AppMenu[];
  @Output() logout: EventEmitter<unknown> = new EventEmitter();

  constructor(private breakpointObserver: BreakpointObserver) { }

  onLogout() {
    this.logout.emit();
  }

}
