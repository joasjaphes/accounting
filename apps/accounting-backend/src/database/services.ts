import { AccountService } from 'src/app/account/account.service';
import { CompanyService } from 'src/app/company/company.service';
import { TransactionService } from 'src/app/transactions/transaction.service';
import { UserService } from 'src/app/user/user.service';

export const services = [
  CompanyService,
  UserService,
  AccountService,
  TransactionService,
];
