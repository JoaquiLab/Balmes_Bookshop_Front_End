import { Component, Input } from '@angular/core';
import { Book } from '@shared';
import { ProductCardComponent } from '../product-card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'cl-products-grid',
  templateUrl: 'products-grid.component.html',
  imports: [ProductCardComponent],
  styles: `
    .products-box-class {
      display: grid;
      grid-template-columns: repeat(4, 0.1fr);
    }
  `,
})
export class ProductsGridComponent {
  @Input() books: Book[] = [];
}
