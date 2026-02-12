import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessory, AccessoryDocument } from './schemas/accessory.schema';
import { CreateAccessoryDto } from './dto/create-accessory.dto';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectModel(Accessory.name)
    private accessoryModel: Model<AccessoryDocument>,
  ) {}

  async create(dto: CreateAccessoryDto): Promise<Accessory> {
    const created = new this.accessoryModel(dto);
    return created.save();
  }

  async findAll(): Promise<Accessory[]> {
    return this.accessoryModel.find().exec();
  }

  async findOne(id: string): Promise<Accessory> {
    const accessory = await this.accessoryModel.findById(id).exec();
    if (!accessory) throw new NotFoundException('Accessory not found');
    return accessory;
  }

  async remove(id: string) {
    const result = await this.accessoryModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Accessory not found');
    return { message: 'Accessory removed' };
  }

  async deleteAll() {
    return this.accessoryModel.deleteMany({}).exec();
  }
}
