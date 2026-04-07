import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Book } from '@shared';
import { TextOverflowPipe } from '../../shared/pipes/overflowText.pipe';

@Component({
  selector: 'product-card',
  templateUrl: 'product-card.component.html',
  imports: [TextOverflowPipe, MatCardModule],
})
export class ProductCardComponent {
  @Input({ required: false }) book: Book;
  constructor() {
    this.book = {
      author: 'Saint Thomas Aquinas',
      genre: 'Philosophy',
      pagesNumber: 2000,
      stock: 12,
      title: 'Summa Theologiae',
      image: 'image-test-product.jpg',
    };
  }
}
