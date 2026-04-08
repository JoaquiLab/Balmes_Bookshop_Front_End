import { AppGlobalState } from '../../../../shared/interfaces/global-interfaces/global-store.interface';
import { createSelector } from '@ngrx/store';

const selectFeature = (appGlobalState: AppGlobalState) => appGlobalState.Dashboard;

export const isLoadingSelector = createSelector(selectFeature, (dashboard) => dashboard.isLoading);

export const booksSelector = createSelector(selectFeature, (dashboard) => dashboard.books);

export const error = createSelector(selectFeature, (dashboard) => dashboard.error);
