import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Book } from '@shared';
import { ProductCardComponent } from '../product-card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridSortOption } from './interfaces/product-grid-sort.interface';
import { Order } from '../dashboard/interfaces/product-grid-product-interfaces';


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
export class ProductsGridComponent implements OnInit {
  @Input({ required: true }) title = '';
  @Input({ required: true }) books: Book[] = [];
  @Input({ required: true }) searchMetadata: SearchMetadata = {
    totalProducts: 0,
    currentPage: 0,
    totalPages: 0,
    searchString: '',
  };

  @Input({ required: true }) options: GridSortOption[] = [];
  @Output() sortingChangeEmitter = new EventEmitter<number>();
  protected sortingSelection: number = Order.LATEST;

  ngOnInit() {
    this.sortingSelection = this.options[0]?.value ?? Order.LATEST;
  }

  /**
   *  Emit the selected sorting option value to the GridComponent
   */
  changeSorting(): void {
    this.sortingChangeEmitter.emit(this.sortingSelection);
  }
}

