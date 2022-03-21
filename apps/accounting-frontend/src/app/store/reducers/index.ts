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


export interface AppState {
  router: RouterReducerState;

}

export const reducers: ActionReducerMap<AppState> = {
  router:routerReducer,

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
