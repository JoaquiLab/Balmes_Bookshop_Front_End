export interface CategoryNode {
  name: string;
  children?: CategoryNode[];
}
export interface CategoryNodeResponse {
  categories: CategoryNode[];
}

