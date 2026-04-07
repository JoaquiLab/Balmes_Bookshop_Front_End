import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials } from '../interfaces/login-credentials.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';
import { User } from '../interfaces/user.interface';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load User': props<{ credentials: LoginCredentials }>(),
    'Load User Success ': props<{ authResponse: AuthResponse }>(),
    'Restore USer': props<{ userFromLocalStorage: User }>(),
    'Delete User': emptyProps(),
    'Load User Failure': props<{ message: string }>(),
  },
});
