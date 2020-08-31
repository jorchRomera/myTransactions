import { TransactionService } from '../domain/TransactionService';
import { Transaction } from '../domain/Transaction';
import { TransactionId } from '../domain/TransactionId';
import { GetTransactionResponse } from '../domain/GetTransactionResponse';

export class GetTransaction {
    private transactionService: TransactionService;

    constructor(transactionService: TransactionService) {
        this.transactionService = transactionService;
    }

    async execute(id: number): Promise<GetTransactionResponse> {
        const transaction = await this.transactionService.get(new TransactionId(id));
        return this.getTransactionResponseFromTransaction(transaction);
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
