import { TransactionService } from '../domain/TransactionService';
import { GetTransactionResponse } from '../domain/GetTransactionResponse';
import { Transaction } from '../domain/Transaction';

export class GetTransactions{
    private transactions: TransactionService;

    constructor(transactionService: TransactionService) {
        this.transactions = transactionService;
    }

    async execute(): Promise<GetTransactionResponse[]> {
        const transactions =  await this.transactions.getAll();
        return transactions.map(transaction => this.getTransactionResponseFromTransaction(transaction));
    }

    private getTransactionResponseFromTransaction = (transaction: Transaction): GetTransactionResponse => {
        const { id, date, amount, type} = transaction;
        return {
            id: id.toInt(),
            type: type.toString(),
            amount: amount.toInt(),
            date: date.getTime(),
        }
    };
}
