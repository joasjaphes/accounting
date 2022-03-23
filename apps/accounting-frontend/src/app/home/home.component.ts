import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '../store/actions/router.actions';
import { addCurrentUser } from '../store/actions/user.actions';
import { AppState } from '../store/reducers';

@Component({
  selector: 'accounting-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    const token = localStorage.getItem('accounting-token');
    const user = localStorage.getItem('accounting-user');
    if (!token) {
      console.log('token')
      this.store.dispatch(go({ route: { path: ['login'] } }));
    }
    if(user) {
      this.store.dispatch(addCurrentUser({ user:JSON.parse(user) }));
    }
  }

}
