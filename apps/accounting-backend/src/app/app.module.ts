import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './company/company.controller';
import { CompanyService } from './company/company.service';
import { databaseProviders } from '../database/database.providers';
import { CompanyRepository } from './company/company.repository';

@Module({
  imports: [],
  controllers: [AppController, CompanyController],
  providers: [
    AppService,
    CompanyService,
    CompanyRepository,
    ...databaseProviders,
  ],
})
export class AppModule {}
