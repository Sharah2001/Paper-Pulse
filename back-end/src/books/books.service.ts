import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schema/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name)
    private readonly bookModel: Model<Book>,
  ) {}

  async create(book: CreateBookDto) {
    if (book.category) {
      book.category = book.category.trim().toLowerCase();
    }
    return this.bookModel.create(book);
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async findOne(id: string) {
    return this.bookModel.findById(id).exec();
  }

  async findByCategory(category: string) {
    return this.bookModel
      .find({
        category: { $regex: category.trim(), $options: 'i' },
      })
      .exec();
  }

  async findNewArrivals() {
    return this.bookModel.find({ isNewArrival: true }).exec();
  }

  async findBestSellers() {
    return this.bookModel.find({ isBestSeller: true }).exec();
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.bookModel
      .findByIdAndUpdate(id, updateBookDto, { new: true })
      .exec();
  }

  async delete(id: string) {
    return this.bookModel.findByIdAndDelete(id).exec();
  }

  async deleteAll() {
    return this.bookModel.deleteMany({}).exec();
  }
}
