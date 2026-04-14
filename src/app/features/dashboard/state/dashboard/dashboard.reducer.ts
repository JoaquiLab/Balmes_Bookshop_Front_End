import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../../interfaces/grid-data.interface';
import { DashBoardActions } from './dashboard.actions';

export const dashboardInitialState: DashboardState = {
  books: [],
  isLoading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  dashboardInitialState,
  on(DashBoardActions.loadDashboard, (_state) => ({ ..._state, isLoading: true })),
  on(DashBoardActions.loadDashboardSuccess, (_state, data) => ({
    ..._state,
    books: data.dashboardResponse.books,
    isLoading: false,
  })),
  on(DashBoardActions.loadDashboardFailure, (_state, error) => ({
    ..._state,
    isLoading: false,
    error: error.message,
  })),
);
