import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { dashBoardActions } from './dashboard.actions';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import { DashboardService } from '../../infrastructure/dashboard.service';

export const getDashboardData = createEffect(
  (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
    return actions$.pipe(
      ofType(dashBoardActions.loadDashboard),
      switchMap(({ key }) =>
        dashboardService.getBooks(key).pipe(
          map((crudResponse) =>
            dashBoardActions.loadDashboardSuccess({ dashboardResponse: crudResponse }),
          ),
          catchError((error: { message: string }) =>
            of(dashBoardActions.loadDashboardFailure(error)),
          ),
        ),
      ),
    );
  },
  { functional: true },
);

export const getCategoryNodeData = createEffect(
  (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
    return actions$.pipe(
      ofType(dashBoardActions.loadDashboard),
      switchMap(({ key }) =>
        dashboardService.getBooks(key).pipe(
          map((crudResponse) =>
            dashBoardActions.loadDashboardSuccess({ dashboardResponse: crudResponse }),
          ),
          catchError((error: { message: string }) =>
            of(dashBoardActions.loadDashboardFailure(error)),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
