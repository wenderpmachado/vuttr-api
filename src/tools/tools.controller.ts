import { Response } from 'express';
import { Controller, Get, Query, Post, Body, HttpStatus, Res, HttpCode, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiQuery, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { ToolsService } from './tools.service';
import { Tool, CreateToolDTO } from './tool.schema';

@ApiTags('tools')
@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all tools' })
  @ApiQuery({ name: 'tag', required: false })
  async findAll(@Query('tag') tag?: string): Promise<Tool[]> {
    return this.toolsService.findAll(tag);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new tool entry' })
  @ApiBody({ type: CreateToolDTO })
  @ApiResponse({ status: HttpStatus.CREATED, type: Tool })
  async create(@Res() res: Response, @Body() tool: CreateToolDTO): Promise<Tool> {
    return this.toolsService.create(tool);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete one tool' })
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.toolsService.delete(id);
  }
}
