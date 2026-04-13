import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { gridProductActions } from './dashboard.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { DashboardService } from '../../infrastructure/dashboard.service';
import { CategoryMenuResponse } from '../../interfaces/category-node.interface';

export const getGridProductData = createEffect(
  (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
    return actions$.pipe(
      ofType(gridProductActions.loadGridProduct),
      switchMap(({ key }) =>
        dashboardService.getBooks(key).pipe(
          map((endpointResponse) =>
            gridProductActions.loadGridProductSuccess({ gridProductResponse: endpointResponse }),
          ),
          catchError((error: { message: string }) =>
            of(gridProductActions.loadGridProductFailure(error)),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
