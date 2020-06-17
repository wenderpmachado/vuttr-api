import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';
import { ToolDocument, ToolSchema } from './tool.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: ToolDocument.name,
      schema: ToolSchema
    }])
  ],
  controllers: [ToolsController],
  providers: [ToolsService]
})
export class ToolsModule {}
