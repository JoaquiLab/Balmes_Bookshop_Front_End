export interface Book {
  pagesNumber: number;
  title: string;
  stock: number;
  genre: string;
  author: string;
  image: string;
}
export interface SearchMetadata {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  searchString: string;
}

export interface GridDataResponse {
  metadata: SearchMetadata;
  books: Book[];
}
