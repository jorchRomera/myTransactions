import { TransactionService } from '../domain/TransactionService';
import { CreateTransactionRequest } from '../domain/CreateTransactionRequest';
import { Transaction } from '../domain/Transaction';
import { TransactionType } from '../domain/TransactionType';
import { Money } from '../domain/Money';
import { Clock } from '../domain/Clock';

export class CreateTransaction {
    private transactionService: TransactionService;
    private clock: Clock;

    constructor(transactionService: TransactionService, clock: Clock) {
        this.transactionService = transactionService;
        this.clock = clock;
    }

    async execute(createTransactionRequest: CreateTransactionRequest): Promise<number> {
        const transaction = this.transactionFromCreateTransactionRequest(createTransactionRequest);
        const transactionId = await this.transactionService.add(transaction);
        return transactionId.toInt()
    }

    private transactionFromCreateTransactionRequest = (createTransactionRequest: CreateTransactionRequest): Transaction => {
        const { type, amount } = createTransactionRequest;
        return {
            id: this.transactionService.nextId(),
            type: TransactionType[type],
            amount: new Money(amount),
            date: this.clock.now(),
        }
    };
}
