import { createFeatureSelector, createSelector, emptyProps } from '@ngrx/store';
import { AppGlobalState } from '../../../shared/interfaces/global-interfaces/global-store.interface';

const selectFeature = (appGlobalState: AppGlobalState) => appGlobalState.user;

export const jwtTokenisLoadingSelector = createSelector(selectFeature, (state) => state.isLoading);

export const jwtTokenSelector = createSelector(selectFeature, (state) => {
  const jwtToken: string | undefined = state?.user?.jwtToken;
  if (jwtToken === undefined) {
    return null;
  }
  return jwtToken;
});
export const jwtTokenErrorSelector = createSelector(selectFeature, (state) => state.error);
