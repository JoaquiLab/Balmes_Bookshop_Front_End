import { Component, Input } from '@angular/core';
import { Book } from '@shared';
import { ProductCardComponent } from '../product-card';

export interface SearchMetadata {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  searchString: string;
}

@Component({
  selector: 'cl-products-grid',
  templateUrl: 'products-grid.component.html',
  styleUrl: 'products-grid.component.scss',
  imports: [ProductCardComponent],
})
export class ProductsGridComponent {
  @Input() books: Book[] = [];
  @Input() searchMetadata: SearchMetadata = {
    totalProducts: 0,
    currentPage: 0,
    totalPages: 0,
    searchString: '',
  };
}
