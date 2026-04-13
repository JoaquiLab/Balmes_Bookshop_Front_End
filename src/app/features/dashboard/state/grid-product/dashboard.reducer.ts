import { createReducer, on } from '@ngrx/store';
import { DashboardState } from '../../interfaces/product-grid-data.interface';
import { gridProductActions } from './dashboard.actions';

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

export const gridProductReducer = createReducer(
  dashboardInitialState,
  on(gridProductActions.loadGridProduct, (_state) => ({ ..._state, isLoading: true })),
  on(gridProductActions.loadGridProductSuccess, (_state, data) => ({
    ..._state,
    metadata: data.gridProductResponse.metadata,
    books: data.gridProductResponse.books,
    isLoading: false,
  })),
  on(gridProductActions.loadGridProductFailure, (_state, error) => ({
    ..._state,
    isLoading: false,
    error: error.message,
  })),
);
