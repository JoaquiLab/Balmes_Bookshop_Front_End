import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { DashBoardActions } from './dashboard.actions';
import { catchError, concat, concatMap, delay, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { DashboardService } from '../../infrastructure/dashboard.service';

export const getDashboardData = createEffect(
  (actions$ = inject(Actions), dashboardService = inject(DashboardService)) => {
    return actions$.pipe(
      ofType(DashBoardActions.loadDashboard),
      tap(({key}) => {
        console.log('Action Dispatched:', key);
      }),
      switchMap(({ key }) =>
        dashboardService.getBooks(key).pipe(
          delay(3000),
          tap((response)=>{
            console.log('Action Delivered:', key);
          }),
          map(
            (crudResponse) =>
              DashBoardActions.loadDashboardSuccess({ dashboardResponse: { books: crudResponse } }),
            catchError((error: { message: string }) =>
              of(DashBoardActions.loadDashboardFailure(error)),
            ),
          ),
        ),
      ),
    );
  },
  { functional: true },
);
