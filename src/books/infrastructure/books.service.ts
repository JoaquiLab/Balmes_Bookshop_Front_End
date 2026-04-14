import { Injectable } from '@nestjs/common';
import { Book } from '../interfaces/categories.interface';

@Injectable({})
export class BookService {
  BOOKS: Book[] = [
    {
      pagesNumber: 1000,
      title: 'Summa Theologies',
      stock: 3,
      genre: 'Philosophy',
      author: 'Saint Thomas Aquinas',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 300,
      title: 'Metaphysics',
      stock: 30,
      genre: 'Philosophy',
      author: 'Aristotle',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 200,
      title: 'History of Spain',
      stock: 2,
      genre: 'History',
      author: 'Pio Moa',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 120,
      title: 'Napoleon',
      stock: 10,
      genre: 'Biographic',
      author: 'Jean Pierre',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 620,
      title: 'Lenin',
      stock: 0,
      genre: 'Biographic',
      author: 'A bulgarian',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 120,
      title: 'Trotsky',
      stock: 1,
      genre: 'Biographic',
      author: 'A Ukranian',
      image: 'image-test-product.jpg',
    },
    {
      pagesNumber: 120,
      title: 'The Republic',
      stock: 133,
      genre: 'Phylosophie',
      author: 'Plato',
      image: 'image-test-product.jpg',
    },
  ];

  getAllBooks(): Book[] {
    return this.BOOKS
  }
}
