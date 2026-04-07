import { DashboardState } from "src/app/features/dashboard/interfaces/grid-data.interface";
import { UserState } from "../../../features/auth/interfaces/user.interface";

export interface AppGlobalState {
  user: UserState;
  Dashboard: DashboardState
}
