import { Module } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';
import { AccessoriesController } from './accessories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Accessory, AccessorySchema } from './schemas/accessory.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Accessory.name, schema: AccessorySchema },
    ]),
  ],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
})
export class AccessoriesModule {}
