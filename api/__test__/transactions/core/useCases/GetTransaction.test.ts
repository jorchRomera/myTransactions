import { TransactionService } from '../../../../src/transactions/core/domain/TransactionService';
import { Clock } from '../../../../src/transactions/core/domain/Clock';
import { StoppedClock } from '../testing/StoppedClock';
import { InMemoryTransactions } from '../../../../src/transactions/core/infraestructure/InMemoryTransactions';
import { aTransaction } from '../testing/TransactionBuilder';
import { GetTransaction } from '../../../../src/transactions/core/useCases/GetTransaction';
import { TransactionType } from '../../../../src/transactions/core/domain/TransactionType';


describe('GetTransaction should', () => {
    it('return a transaction for the given transaction ID', async () => {
        clock = StoppedClock.at(new Date(2018, 12, 12, 12, 12));
        const someId = 7;
        const someAmount = 225.32;
        const someType = TransactionType.credit
        const someTransaction = aTransaction()
            .withId(someId).withAmount(someAmount).withDate(clock.now()).withType(someType).build();
        const someTransactionId = await transactions.add(someTransaction);

        const response = await useCase().execute(someId);

        expect(response.id).toEqual(someTransactionId.toInt());
        expect(response.type).toEqual(someTransaction.type.toString());
        expect(response.amount).toEqual(someTransaction.amount.toInt());
        expect(response.date).toEqual(someTransaction.date.getTime());
    })

    it('should throw error if the does not exist an account with the given id', async () => {
        const someId = 57

        try {
            await useCase().execute(someId)
        } catch (e) {
            expect(e.message).toBe("Doesn't exists transaction with the ID passed");
        }
    })


    beforeEach(() => {
        transactions = new InMemoryTransactions();
    });

    function useCase() {
        return new GetTransaction(transactions);
    }

    let transactions: TransactionService;
    let clock: Clock;
})
