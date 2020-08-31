import { TransactionService } from '../../../../src/transactions/core/domain/TransactionService';
import { Clock } from '../../../../src/transactions/core/domain/Clock';
import { StoppedClock } from '../testing/StoppedClock';
import { InMemoryTransactions } from '../../../../src/transactions/core/infraestructure/InMemoryTransactions';
import { aCreateTransactionRequest } from '../testing/CreateTransactionRequestBuilder';
import { CreateTransaction } from '../../../../src/transactions/core/useCases/CreateTransaction';
import { TransactionId } from '../../../../src/transactions/core/domain/TransactionId';


describe('CreateTransaction should', () => {
    it('create a new transaction', async () => {
        const someCreateTransactionRequest = aCreateTransactionRequest().withAmount(450.50).withType('credit').build();

        const newTransactionId = await useCase().execute(someCreateTransactionRequest);

        const lastTransactionCreated = await transactions.get(new TransactionId(newTransactionId))
        expect(lastTransactionCreated.type).toEqual(someCreateTransactionRequest.type);
        expect(lastTransactionCreated.amount.toInt()).toEqual(someCreateTransactionRequest.amount);
        expect(lastTransactionCreated.date).toEqual(clock.now());
    })

    it('should throw error if the debit amount is higher than the total balance', async () => {
        const someCreateTransactionRequest = aCreateTransactionRequest().withAmount(50).withType('debit').build();

        try {
            await useCase().execute(someCreateTransactionRequest)
        } catch (e) {
            expect(e.message).toBe("Transaction balance cannot be less than zero");
        }
    })

    beforeEach(() => {
        transactions = new InMemoryTransactions();
        clock = StoppedClock.at(new Date(2020, 4, 12, 10, 52));
    });

    function useCase() {
        return new CreateTransaction(transactions, clock);
    }

    let transactions: TransactionService;
    let clock: Clock;
})
