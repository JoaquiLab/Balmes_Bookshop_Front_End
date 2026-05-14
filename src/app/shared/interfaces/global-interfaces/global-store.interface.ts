import { DashboardState } from 'src/app/features/dashboard/interfaces/product-grid-redux-flux.interface';
import { UserState } from '../../../features/auth/interfaces/user.interface';
import { CategoryMenuState } from 'src/app/features/dashboard/interfaces/category-menu-data.interface';

export interface AppGlobalState {
  User: UserState;
  Dashboard: DashboardState;
  DashboardMenu: CategoryMenuState
}
