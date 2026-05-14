import { Book } from "@shared";
import { SearchMetadata } from "../../products-grid";

export interface SearchConfig {
  key: string,
  sortType: number
}

export enum Order {
  HIGH_PRICE = 1,
  LOW_PRICE = 2,
  LATEST = 3,
}

export interface GridProductResponse {
  metadata: SearchMetadata
  books: Book[];
}
