import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TodoService {
  constructor(private prismaService: PrismaService) {}

  async fetchAllTodos(): Promise<Todo[]> {
    return this.prismaService.todo.findMany();
  }

  async fetchTodoItem(id: Number): Promise<Todo | null> {
    return this.prismaService.todo.findUnique({ where: { id: Number(id) } });
  }

  async fetchDeleteTodoItem(id: Number): Promise<Todo | null> {
    return this.prismaService.todo.delete({ where: { id: Number(id) } });
  }

  async fetchAddTodoItem(data: Todo): Promise<Todo> {
    return this.prismaService.todo.create({ data: data });
  }

  async fetchPutTodoItem(id: Number, data: Todo): Promise<Todo> {
    return this.prismaService.todo.update({
      where: { id: Number(id) },
      data: data,
    });
  }
}
