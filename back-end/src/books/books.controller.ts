import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  // CREATE
  @Post()
  create(@Body() bookData: CreateBookDto) {
    return this.booksService.create(bookData);
  }
  // READ ALL
  @Public()
  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  // CATEGORY
  @Public()
  @Get('category/:category')
  findByCategory(@Param('category') category: string) {
    return this.booksService.findByCategory(category);
  }

  // NEW ARRIVALS
  @Public()
  @Get('new-arrivals')
  findNewArrivals() {
    return this.booksService.findNewArrivals();
  }

  // BEST SELLERS
  @Public()
  @Get('best-sellers')
  findBestSellers() {
    return this.booksService.findBestSellers();
  }

  // READ ONE
  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const book = await this.booksService.findOne(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  // UPDATE
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    const updated = await this.booksService.update(id, body);
    if (!updated) {
      throw new NotFoundException('Book not found for update');
    }
    return updated;
  }

  // DELETE
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.booksService.delete(id);
    if (!deleted) {
      throw new NotFoundException('Book not found for deletion');
    }
    return deleted;
  }
}
