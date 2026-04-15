import { User } from '@features/auth';
import { Book } from '@shared';

export interface DashboardState {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}
