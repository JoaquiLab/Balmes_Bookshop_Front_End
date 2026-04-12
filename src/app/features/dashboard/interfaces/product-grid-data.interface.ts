import { Book } from '@shared';
import { SearchMetadata } from '../../products-grid';

export interface DashboardState {
  metadata: SearchMetadata
  books: Book[];
  isLoading: boolean;
  error: string | null;
}
