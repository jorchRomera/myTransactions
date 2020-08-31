import { TransactionType } from './TransactionType';
import { TransactionId } from './TransactionId';
import { Money } from './Money';

export interface Transaction {
    id: TransactionId,
    type: TransactionType,
    amount: Money,
    date: Date,
}
