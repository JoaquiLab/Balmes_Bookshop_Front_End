import { CategoryTreeNode } from './category-node.interface';

export interface CategoryMenuState {
  categoryTreeNodes: CategoryTreeNode[];
  isLoading: boolean;
  error: string | null;
}
