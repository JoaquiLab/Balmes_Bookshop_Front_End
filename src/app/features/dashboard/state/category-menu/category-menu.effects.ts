import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { DashboardService } from '../../infrastructure/dashboard.service';
import { categoryMenuActions } from './category-menu.actions';

export const getCategoryNodeData = createEffect(
  (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
    return actions$.pipe(
      ofType(categoryMenuActions.loadCategoryMenu),
      switchMap(() =>
        dashboardService.getCategoryNode().pipe(
          map((endpointResponse) =>
            categoryMenuActions.loadCategoryMenuSuccess({ categoryMenuResponse: endpointResponse }),
          ),
          catchError((error: { message: string }) =>
            of(categoryMenuActions.loadCategoryMenuFailure(error)),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
