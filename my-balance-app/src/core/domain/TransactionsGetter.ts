import { Transaction } from './Transaction';

export interface TransactionsGetter {
    get(): Promise<Transaction[]>;
}
