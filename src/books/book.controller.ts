import { Get, Query, Controller, Inject } from '@nestjs/common';
import type { Book, GridDataResponse } from './interfaces/categories.interface';
import { BookService } from './infrastructure/books.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService){}

  //GetBooks
  @Get()
  findAll(@Query('name') name: string): GridDataResponse {
    // /books?name?=''||'abc'
    const books: Book[] = this.bookService.getAllBooks();
    if (name == '') {
      return {
        metadata: {
          totalProducts: books.length,
          currentPage: 0,
          totalPages: 0,
          searchString: '',
        },
        books: books,
      };
    }
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(name.toLowerCase()),
    );
    return {
      books: filteredBooks,
      metadata: {
        totalProducts: filteredBooks.length,
        currentPage: 0,
        totalPages: 0,
        searchString: '',
      },
    };
  }
}
