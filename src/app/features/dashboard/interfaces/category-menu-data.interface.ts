import { Book } from '@shared';
import { SearchMetadata } from '../../products-grid';
import { CategoryTreeNode } from './category-node.interface';

export interface CategoryMenuState {
  categoryTreeNodes: CategoryTreeNode[];
  isLoading: boolean;
  error: string | null;
}
