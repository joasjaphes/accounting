import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { User } from '../auth/user.entity';
import { TransactionsModule } from '../transactions/transactions.module';
import { TransactionEntity } from '../transactions/transaction.entity';
import { AccountsModule } from '../accounts/accounts.module';
import { Account } from '../accounts/accounts.entity';


@Module({
  imports: [
    AuthModule,
    TransactionsModule,
    AccountsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'accounting',
      entities: [User, TransactionEntity, Account],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
