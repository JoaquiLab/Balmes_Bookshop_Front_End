import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './infrastructure/books.service';

@Module({
  controllers: [BookController],
  exports: [],
  providers: [BookService],
})
export class BooksModule {}
