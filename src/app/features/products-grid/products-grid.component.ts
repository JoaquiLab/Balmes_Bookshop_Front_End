import { Component, Input } from '@angular/core';
import { Book } from '@shared';
import { ProductCardComponent } from '../product-card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  imports: [ProductCardComponent, MatSelectModule, ReactiveFormsModule, FormsModule],
})
export class ProductsGridComponent {
  @Input() books: Book[] = [];
  @Input() searchMetadata: SearchMetadata = {
    totalProducts: 0,
    currentPage: 0,
    totalPages: 0,
    searchString: '',
  };
  protected selectedValue = '';

  protected options: { value: string | number; label: string }[] = [
    { value: '1', label: 'Por los últimos' },
    { value: '2', label: 'Ordenar por precio más alto' },
    { value: '3', label: 'Ordenar por precio más bajo' },
  ];

  funtionToCall() {
    console.log('Form-Selected-Value: ', this.selectedValue);
  }
}
