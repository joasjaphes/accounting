import { ActionReducerMap } from '@ngrx/store';
import * as fromAccounts from './accounts/accounts.reducer';

export interface AppState {
  [fromAccounts.featureKey]: fromAccounts.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAccounts.featureKey]: fromAccounts.reducer,
};
