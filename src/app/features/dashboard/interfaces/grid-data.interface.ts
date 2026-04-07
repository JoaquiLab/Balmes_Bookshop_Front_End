import { User } from '@features/auth';
import { Book } from '@shared/interfaces';

export interface DashboardState {
  books: Book[];
  isLoading: boolean;
  error: string | null;
}
