import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto'
import { UpdateTodoDto } from './dto/update-todo.dto'

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodos() {
    return this.todoService.findAll()
  }

  @Get(':id')
  async getTodoById(@Param('id') id: number) {
    return this.todoService.findOne(id)
  }

  @Post()
  async createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto)
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ) {
    return this.todoService.update(id, updateTodoDto)
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    return this.todoService.delete(id)
  }
}
