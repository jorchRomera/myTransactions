import { Transaction } from './Transaction';
import { TransactionId } from './TransactionId';

export interface TransactionService {
    getAll(): Promise<Transaction[]>;
    add(transaction: Transaction): Promise<TransactionId>;
    get(transactionId: TransactionId): Promise<Transaction>;
    nextId(): TransactionId;
}
