import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransactionReducer from '../reducers/transaction.reducer';

export const selectTransationState = createFeatureSelector<fromTransactionReducer.State>(fromTransactionReducer.transactionFeatureKey);

export const selectAll = createSelector(selectTransationState, fromTransactionReducer.selectAll);
export const selectEntities = createSelector(selectTransationState, fromTransactionReducer.selectEntities);
