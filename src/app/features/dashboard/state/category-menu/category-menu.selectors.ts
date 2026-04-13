import { AppGlobalState } from '@shared';
import { createSelector } from '@ngrx/store';

const selectFeature = (appGlobalState: AppGlobalState) => appGlobalState.DashboardMenu;

export const isLoadingSelector = createSelector(
  selectFeature,
  (dashboardMenu) => dashboardMenu.isLoading,
);

export const categoryNodesSelector = createSelector(
  selectFeature,
  (dashboardMenu) => dashboardMenu.categoryTreeNodes,
);

export const errorSelector = createSelector(selectFeature, (dashboardMenu) => dashboardMenu.error);
