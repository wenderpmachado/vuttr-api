import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { ToolsService } from './tools.service';
import { ToolDocument, Tool } from './tool.schema';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tools' })
  @ApiQuery({ name: 'tag', required: false })
  async findAll(@Query('tag') tag?: string): Promise<ToolDocument[]> {
    return this.toolsService.findAll(tag);
  }
}
