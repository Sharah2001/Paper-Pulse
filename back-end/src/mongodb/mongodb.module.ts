import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/paper-pulse';
const client = new MongoClient(url);

@Module({
  providers: [
    {
      provide: 'MONGODB_CONNECTION',
      useFactory: async () => {
        await client.connect();
        return client.db('paper-pulse');
      },
    },
  ],
  exports: ['MONGODB_CONNECTION'],
})
export class MongodbModule {}
