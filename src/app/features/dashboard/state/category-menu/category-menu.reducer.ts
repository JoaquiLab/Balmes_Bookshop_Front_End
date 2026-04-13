import { createReducer, on } from '@ngrx/store';
import { categoryMenuActions } from './category-menu.actions';
import { CategoryMenuState } from '../../interfaces/category-menu-data.interface';

export const categoryMenuInitialState: CategoryMenuState = {
  categoryTreeNodes: [],
  isLoading: false,
  error: null,
};

export const categoryMenuReducer = createReducer(
  categoryMenuInitialState,
  on(categoryMenuActions.loadCategoryMenu, (_state) => ({ ..._state, isLoading: true })),
  on(categoryMenuActions.loadCategoryMenuSuccess, (_state, data) => ({
    ..._state,
    categoryTreeNodes: data.categoryMenuResponse.categoryMenuNodes,
    isLoading: false,
  })),
  on(categoryMenuActions.loadCategoryMenuFailure, (_state, error) => ({
    ..._state,
    isLoading: false,
    error: error.message,
  })),
);
