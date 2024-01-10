import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionDTO } from './transaction.dto';
import { JournalEntryService } from '../journal-entry/journal-entry.service';
import { AccountService } from '../account/account.service';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private repository: Repository<TransactionEntity>,
    private journalService: JournalEntryService,
    private accountService: AccountService
  ) {}

  async saveTransaction(transaction: TransactionDTO) {
    try {
      const payload = await this.getTransactionPayloadFromDTO(transaction);
      return payload.save();
    } catch (e) {
      console.error('Failed to save transaction', e);
      throw e;
    }
  }

  async getTransactionPayloadFromDTO(
    transaction: TransactionDTO
  ): Promise<TransactionEntity> {
    const transactionPayload = this.repository.create();
    transactionPayload.uid = transaction.id;
    transactionPayload.amount = transaction.amount;
    transactionPayload.journal = await this.journalService.getJournalEntryByUid(
      transaction.journal
    );
    const account = await this.accountService.getAccountByUId(transaction.id);
    transactionPayload.account =
      await this.accountService.getAccountPayloadFromDTO(account);
    return transactionPayload;
  }
}
