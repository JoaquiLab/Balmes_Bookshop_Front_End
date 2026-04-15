import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthenticationService } from '../../../features/auth/infrastructure/auth-service.service';
import { UserActions } from './auth.actions';
import { catchError, concatMap, map, of, switchMap } from 'rxjs';

export const getToken = createEffect(
  (actions$ = inject(Actions), jwtTokenService = inject(AuthenticationService)) => {
    return actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) =>
        jwtTokenService.login(action.credentials.name, action.credentials.password).pipe(
          map((response) => UserActions.loadUserSuccess({ authResponse: response })),
          catchError((error: { message: string }) =>
            of(UserActions.loadUserFailure({ message: error.message })),
          ),
        ),
      ),
    );
  },
  {
    functional: true,
  },
);
