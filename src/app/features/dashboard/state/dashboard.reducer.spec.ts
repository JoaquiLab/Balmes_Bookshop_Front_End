import { Action, props } from '@ngrx/store';
import { DashboardState } from '../interfaces/grid-data.interface';
import * as dashboardReducer from './dashboard.reducer';
import * as dashboardActions from './dashboard.actions';

describe('dashboard-reducers', () => {
  const action: Action = { type: 'unknow' };
  const defaultDashBoardState: DashboardState = dashboardReducer.dashboardReducer(
    undefined,
    action,
  );
  describe('reducer-tests', () => {
    it('[dashboard-load-success--test] must return a books list', () => {
      const successDashboardAction: Action = dashboardActions.DashBoardActions.loadDashboardSuccess(
        {
          dashboardResponse: {
            books: [
              {
                pagesNumber: 10000,
                title: 'Summa Theologies',
                stock: 30,
                genre: 'Philosophy',
                author: 'Saint Thomas Aquinas',
              },
            ],
          },
        },
      );
      const successDashboardRecucerResult: DashboardState = dashboardReducer.dashboardReducer(
        defaultDashBoardState,
        successDashboardAction,
      );
      const expectedResult: DashboardState = {
        books: [
          {
            pagesNumber: 10000,
            title: 'Summa Theologies',
            stock: 30,
            genre: 'Philosophy',
            author: 'Saint Thomas Aquinas',
          },
        ],
        error: null,
        isLoading: false,
      };
      expect(successDashboardRecucerResult).toEqual(expectedResult);
    });
    it('[dashboard-load--test] must return a books list', () => {
      const successDashboardAction: Action = dashboardActions.DashBoardActions.loadDashboardSuccess(
        {
          dashboardResponse: {
            books: [
              {
                pagesNumber: 10000,
                title: 'Summa Theologies',
                stock: 30,
                genre: 'Philosophy',
                author: 'Saint Thomas Aquinas',
              },
            ],
          },
        },
      );
      const successDashboardRecucerResult: DashboardState = dashboardReducer.dashboardReducer(
        defaultDashBoardState,
        successDashboardAction,
      );
      const expectedResult: DashboardState = {
        books: [
          {
            pagesNumber: 10000,
            title: 'Summa Theologies',
            stock: 30,
            genre: 'Philosophy',
            author: 'Saint Thomas Aquinas',
          },
        ],
        error: null,
        isLoading: false,
      };
      expect(successDashboardRecucerResult).toEqual(expectedResult);
    });
  });
});
