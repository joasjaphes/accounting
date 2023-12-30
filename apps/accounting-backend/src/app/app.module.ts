import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './company/company.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'accounting-database',
      port: 5432,
      username: 'accounting',
      password: 'accounting',
      database: 'accounting',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      // entities: [Company],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Company]),
  ],
  controllers: [AppController, CompanyController],
  providers: [AppService, CompanyService],
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded', __dirname + '/../**/*.entity{.ts,.js');
  }
}