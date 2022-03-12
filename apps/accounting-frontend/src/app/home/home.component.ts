import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { go } from '../store/actions/router.actions';
import { State } from '../store/reducers';

@Component({
  selector: 'accounting-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    const token = localStorage.getItem('accounting-token');
    if (!token) {
      console.log('token')
      this.store.dispatch(go({ route: { path: ['login'] } }));
    }
  }

}
