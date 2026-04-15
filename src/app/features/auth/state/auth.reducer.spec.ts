import { createReducer } from '@ngrx/store';
import { User, UserState } from '../interfaces/user.interface';
import { UserActions } from './auth.actions';
import { sessionUserInitialState, sessionUserReducer } from './auth.reducer';
import { AuthResponse } from '../interfaces/auth-response.interface';

describe('auth-reducers', () => {
  const action = { type: 'unknow' };
  const newUserState: UserState = sessionUserReducer(undefined, action);
  describe('initalState', () => {
    it('the returned state should be equals to the sessionUserInitalState', () => {
      expect(newUserState).toEqual(sessionUserInitialState);
    });
    it('the initial state should contain the correct properties', () => {
      expect(newUserState.user).toEqual(null);
      expect(newUserState.isLoading).toEqual(false);
      expect(newUserState.error).toEqual(null);
    });
  });
  describe('reducer-test', () => {
    //Request user reducer tests
    it('[User Request] should initial state with isLoading property as true', () => {
      const action = UserActions.loadUser;
      const reducer = sessionUserReducer(sessionUserInitialState, action);
      const expectedState: UserState = { ...sessionUserInitialState, isLoading: true };
      console.log('UserActionRequestUser-TEST:', expectedState);
      expect(reducer).toEqual(expectedState);
    });
    //Success user reducer tests
    it('[User Success] should return: initial state with user property', () => {
      const fakeBackendResponse: AuthResponse = {
        email: 'test@email.com',
        id: '1',
        password: '1234',
        token: 'testToken',
      };
      const action = UserActions.loadUserSuccess({ authResponse: fakeBackendResponse });
      const reducer = sessionUserReducer(sessionUserInitialState, action);
      const expectedState: UserState = {
        ...sessionUserInitialState,
        isLoading: false,
        user: { jwtToken: fakeBackendResponse.token, email: fakeBackendResponse.email },
      };
      expect(reducer).toEqual(expectedState);
    });
    //Delete user reducer test
    it('[User delete] should return a initial state with user property as null', () => {
      const action = UserActions.deleteUser;
      const reducer = sessionUserReducer(sessionUserInitialState, action);
      const expectedState: UserState = {
        ...sessionUserInitialState,
        isLoading: false,
        user: null,
      };
      expect(reducer).toEqual(expectedState);
    });
    it('[User Restore] should return a initial state with the passed data', () => {
      const fakeUserRestoreData: User = {
        email: 'test@email.com',
        jwtToken: 'testToken',
      };
      const action = UserActions.restoreUser({ userFromLocalStorage: fakeUserRestoreData });
      const reducer = sessionUserReducer(sessionUserInitialState, action);
      const expectedState: UserState = {
        ...sessionUserInitialState,
        isLoading: false,
        user: { ...fakeUserRestoreData },
      };
      expect(reducer).toEqual(expectedState);
    });
  });
});
