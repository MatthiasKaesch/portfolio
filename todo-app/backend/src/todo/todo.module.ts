import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoController } from './todo.controller'
import { TodoService } from './todo.service'
import { Todo } from './todo.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]), // Verknüpft die Todo-Entität mit der DB
  ],
  controllers: [TodoController], // Controller für die API-Endpunkte
  providers: [TodoService], // Service für die Geschäftslogik
  exports: [TodoService], // Ermöglicht anderen Modulen den Zugriff auf TodoService
})
export class TodoModule {}
