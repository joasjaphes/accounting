export interface TransactionDTO {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: TransactionType;
}

export type TransactionType = 'Debit' | 'Credit';
