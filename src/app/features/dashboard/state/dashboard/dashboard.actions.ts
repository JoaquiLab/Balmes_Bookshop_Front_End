import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { DashboardResponse } from '../../interfaces/product-grid.interface';
import { CategoryNodeResponse } from '../../interfaces/category-node.interface';

export const dashBoardActions = createActionGroup({
  source: 'dashboard',
  events: {
    'Load Dashboard': props<{ key: string }>(),
    'Load Dashboard Success': props<{ dashboardResponse: DashboardResponse }>(),
    'Load Dashboard Failure': props<{ message: string }>(),
  },
});

export const categoryNodeActions = createActionGroup({
  source: 'categoryNode',
  events: {
    'Load categoryNode': emptyProps(),
    'Load categoryNode Success': props<{ categoryNodeResponse: CategoryNodeResponse }>(),
    'Load categoryNode Failure': props<{ message: string }>(),
  },
});
