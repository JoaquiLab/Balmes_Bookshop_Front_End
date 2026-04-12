import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../../interfaces/product-grid-data.interface';
import { dashBoardActions } from './dashboard.actions';

export const dashboardInitialState: DashboardState = {
  metadata: {
    totalProducts: 0,
    currentPage: 0,
    totalPages: 0,
    searchString: '',
  },
  books: [],
  isLoading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  dashboardInitialState,
  on(dashBoardActions.loadDashboard, (_state) => ({ ..._state, isLoading: true })),
  on(dashBoardActions.loadDashboardSuccess, (_state, data) => ({
    ..._state,
    metadata: data.dashboardResponse.metadata,
    books: data.dashboardResponse.books,
    isLoading: false,
  })),
  on(dashBoardActions.loadDashboardFailure, (_state, error) => ({
    ..._state,
    isLoading: false,
    error: error.message,
  })),
);
