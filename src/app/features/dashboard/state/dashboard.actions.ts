import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { DashboardResponse } from '../interfaces/dashboard-data-response.interface';

export const DashBoardActions = createActionGroup({
  source: 'dashboard',
  events: {
    'Load Dashboard': emptyProps(),
    'Load Dashboard Success': props<{ dashboardResponse: DashboardResponse }>(),
    'Load Dashboard Failure': props<{ message: string }>(),
  },
});
