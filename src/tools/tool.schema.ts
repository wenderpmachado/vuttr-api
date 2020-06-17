import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Tool {
  _id?: string;
  title?: string;
  link?: string;
  description?: string;
  tags?: string[];
}

@Schema()
export class ToolDocument extends Document {
  @ApiProperty()
  @Prop()
  _id: string;

  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  link: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop([String])
  tags: string[];
}

export const ToolSchema = SchemaFactory.createForClass(ToolDocument);
