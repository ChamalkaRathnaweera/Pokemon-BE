import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  ability: string;
}


export const UserSchema = SchemaFactory.createForClass(User)