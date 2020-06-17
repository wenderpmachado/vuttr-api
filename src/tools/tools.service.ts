import { isEmpty } from 'lodash';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToolDocument, CreateToolDTO } from './tool.schema';

@Injectable()
export class ToolsService {
  constructor(@InjectModel(ToolDocument.name) private readonly toolModel: Model<ToolDocument>) {}

  async findAll(tag?: string): Promise<ToolDocument[]> {
    const where = !isEmpty(tag) ? { tag } : {};
    return this.toolModel.find(where).exec();
  }

  async create(tool: CreateToolDTO): Promise<ToolDocument> {
    return this.toolModel.create(tool);
  }
}
