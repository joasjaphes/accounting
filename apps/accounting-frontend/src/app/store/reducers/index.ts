import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import * as fromRouter from './router.reducer';


export interface State {
  router: RouterReducerState;

}

export const reducers: ActionReducerMap<State> = {
  router:routerReducer,

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
