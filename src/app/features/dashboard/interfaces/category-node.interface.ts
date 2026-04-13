export interface CategoryTreeNode {
  name: string;
  children?: CategoryTreeNode[];
}
export interface CategoryMenuResponse {
  categoryMenuNodes: CategoryTreeNode[];
}

