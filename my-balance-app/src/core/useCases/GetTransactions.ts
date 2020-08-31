import { Transaction } from '../domain/Transaction';
import { TransactionsGetter } from '../domain/TransactionsGetter';

export class GetTransactions {
    private readonly transactionGetter: TransactionsGetter;

    constructor(transactionGetter: TransactionsGetter) {
        this.transactionGetter = transactionGetter;
    }

    async execute(): Promise<Transaction[]> {
        return await this.transactionGetter.get();
    }
}
