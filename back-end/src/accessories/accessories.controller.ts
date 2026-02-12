import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { CreateAccessoryDto } from './dto/create-accessory.dto';
import { Public } from '../auth/decorators/public.decorator';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) { }

  @Post()
  create(@Body() dto: CreateAccessoryDto) {
    return this.accessoriesService.create(dto);
  }

  @Public()
  @Get()
  findAll() {
    return this.accessoriesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessoriesService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accessoriesService.remove(id);
  }
}
