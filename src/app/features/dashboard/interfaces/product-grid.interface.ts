import { Book } from '@shared';
import { SearchMetadata } from '../../products-grid';

export interface DashboardResponse {
  metadata: SearchMetadata
  books: Book[];
}
