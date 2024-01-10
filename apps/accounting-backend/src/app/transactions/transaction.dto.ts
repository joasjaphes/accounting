export interface TransactionDTO {
  id: string;
  description: string;
  date: string;
  amount: number;
  type: TransactionType;
  journal:string;
}

export type TransactionType = 'Debit' | 'Credit';
