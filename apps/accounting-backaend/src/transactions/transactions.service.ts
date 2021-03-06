import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../auth/user.entity';
import { TransactionDto } from './dtos/transaction.dto';
import { TransactionEntity } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionsService {
    constructor(private transactionRepository: TransactionRepository) { }

    async createTransaction(transactionPayload: TransactionDto, user: User) {
        try {
            const transaction = new TransactionEntity();
            transaction.uid = transactionPayload.id;
            transaction.date = transactionPayload.date;
            transaction.description = transactionPayload.description;
            transaction.user = user;
            await transaction.save();
            return this.sanitizePayload(transaction);
        } catch (e) {
            throw new BadRequestException();
        }
    }

    async getAllTransactions() {
        const transactions = await this.transactionRepository.getAll();
        const transactionsToReturn = transactions.map(transaction => this.sanitizePayload(transaction));
        return transactionsToReturn;
    }

    sanitizePayload(transaction: TransactionEntity) {
        return {
            id: transaction.uid,
            date: transaction.date,
            description: transaction.description,
            user: transaction.user.uid
        };
    }

}
