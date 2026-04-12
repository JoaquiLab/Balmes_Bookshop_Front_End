import { DashboardState } from 'src/app/features/dashboard/interfaces/product-grid-data.interface';
import { UserState } from '../../../features/auth/interfaces/user.interface';

export interface AppGlobalState {
  User: UserState;
  Dashboard: DashboardState;
}
