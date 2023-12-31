import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from 'src/database/entities';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'accounting',
      password: 'accounting',
      database: 'accounting',
      entities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([...entities]),
  ],
  controllers: [AppController, CompanyController, UserController],
  providers: [AppService, CompanyService, UserService],
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded', __dirname + '/../**/*.entity{.ts,.js');
  }
}
