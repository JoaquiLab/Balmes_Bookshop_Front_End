import { Action } from '@ngrx/store';
import { DashboardState } from '../../interfaces/product-grid-data.interface';
import * as dashboardReducer from './dashboard.reducer';
import * as dashboardActions from './dashboard.actions';

describe('dashboard-reducers', () => {
  const action: Action = { type: 'unknow' };
  const defaultDashBoardState: DashboardState = dashboardReducer.gridProductReducer(
    undefined,
    action,
  );
  describe('reducer-tests', () => {
    it('[success-dashboard-test] must return a books list', () => {
      const successDashboardAction: Action = dashboardActions.gridProductActions.loadDashboardSuccess(
        {
          dashboardResponse: {
            metadata: {
              currentPage: 0,
              searchString: '',
              totalPages: 0,
              totalProducts: 0,
            },
            books: [
              {
                pagesNumber: 10000,
                title: 'Summa Theologies',
                stock: 30,
                genre: 'Philosophy',
                author: 'Saint Thomas Aquinas',
                image: '',
              },
            ],
          },
        },
      );
      const successDashboardRecucerResult: DashboardState = dashboardReducer.gridProductReducer(
        defaultDashBoardState,
        successDashboardAction,
      );
      const expectedResult: DashboardState = {
        metadata: {
          currentPage: 0,
          searchString: '',
          totalPages: 0,
          totalProducts: 0,
        },
        books: [
          {
            pagesNumber: 10000,
            title: 'Summa Theologies',
            stock: 30,
            genre: 'Philosophy',
            author: 'Saint Thomas Aquinas',
            image: '',
          },
        ],
        error: null,
        isLoading: false,
      };
      expect(successDashboardRecucerResult).toEqual(expectedResult);
    });
  });
});
