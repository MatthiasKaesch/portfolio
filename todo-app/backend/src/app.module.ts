import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoModule } from './todo/todo.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dein-passwort',
      database: 'todo-db',
      entities: [],
      synchronize: true,
    }),
    TodoModule,
  ],
})
export class AppModule {}
