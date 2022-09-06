import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '@prisma/client';
import { TodoService } from '../service/todo.service';

@Controller('api/v1/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async fetchAllTodos(): Promise<Todo[]> {
    return this.todoService.fetchAllTodos();
  }

  @Get(':id')
  async fetchTodoItem(@Param('id') id: Number): Promise<Todo | null> {
    return this.todoService.fetchTodoItem(id);
  }

  @Delete(':id')
  async fetchDeleteTodoItem(@Param('id') id: Number): Promise<Todo | null> {
    return this.todoService.fetchDeleteTodoItem(id);
  }

  @Post()
  async fetchAddTodoItem(@Body() data: Todo): Promise<Todo> {
    return this.todoService.fetchAddTodoItem(data);
  }

  @Put(':id')
  async fetchPutTodoItem(
    @Param('id') id: Number,
    @Body() data: Todo,
  ): Promise<Todo> {
    return this.todoService.fetchPutTodoItem(id, data);
  }
}
