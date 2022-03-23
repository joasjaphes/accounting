import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AppState } from '../../store/reducers';
import { select, Store } from '@ngrx/store';
import { go } from '../../store/actions/router.actions';
import { removeCurrentUser } from '../../store/actions/user.actions';
import * as userSelector from '../../store/selectors/user.selectors';
import { User } from '../../store/models/user.model';

@Component({
  selector: 'accounting-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  currentUser$: Observable<User | undefined>;

  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) { }

  ngOnInit() {
    this.currentUser$ = this.store.pipe(select(userSelector.selectCurrentUser));
  }

  logout() {
    localStorage.removeItem('accounting-token');
    localStorage.removeItem('accounting-user');
    this.store.dispatch(removeCurrentUser());
    this.store.dispatch(go({ route: { path: ['/', 'login'] } }));
  }

}
