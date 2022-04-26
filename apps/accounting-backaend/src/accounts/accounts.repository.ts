import { EntityRepository, Repository } from 'typeorm';
import { Account } from './accounts.entity';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {

    async saveAccount(accountPpayload:Account) {
        return await accountPpayload.save();
    }

    async getAllAccounts() {
        return await this.find();
    }

}