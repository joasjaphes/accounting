import { Module } from '@nestjs/common';
import { AuthController } from '../auth/auth.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { User } from '../auth/user.entity';
import { TransactionsModule } from '../transactions/transactions.module';


@Module({
  imports: [
    AuthModule,
    TransactionsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'accounting',
      entities: [User],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
