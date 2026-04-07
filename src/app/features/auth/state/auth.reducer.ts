import { createReducer, on, State } from '@ngrx/store';
import { UserActions } from './auth.actions';
import { UserState, User } from '../interfaces/user.interface';

export const sessionUserInitialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const sessionUserReducer = createReducer(
  sessionUserInitialState,
  on(UserActions.loadUser, (_state) => ({ ..._state, isLoading: true })),
  on(UserActions.loadUserSuccess, (_state, { authResponse }) => ({
    ..._state,
    isLoading: false,
    user: {
      jwtToken: authResponse.token,
      email: authResponse.email,
    },
  })),
  on(UserActions.deleteUser, (_state) => ({
    ..._state,
    isLoading: false,
    user: null,
  })),
  on(UserActions.restoreUSer, (_state, { userFromLocalStorage }) => ({
    ..._state,
    isLoading: false,
    user: userFromLocalStorage,
  })),
  on(UserActions.loadUserFailure, (_state, error) => ({
    ..._state,
    isLoading: false,
    error: error.message,
  })),
);
