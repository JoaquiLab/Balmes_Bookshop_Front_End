import { Book } from '@shared';
import { SearchMetadata } from '../../products-grid';

export interface GridProductResponse {
  metadata: SearchMetadata
  books: Book[];
}
