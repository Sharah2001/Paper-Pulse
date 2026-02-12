import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name!: string;

  @Prop({ unique: true, required: true })
  email!: string;

  @Prop({ required: true, select: false })
  password!: string;

  @Prop({ default: 'user', enum: ['user', 'admin'] })
  role!: 'user' | 'admin';
}

export const UserSchema = SchemaFactory.createForClass(User);
