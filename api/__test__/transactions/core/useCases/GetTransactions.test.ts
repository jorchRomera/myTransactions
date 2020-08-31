import { TransactionService } from '../../../../src/transactions/core/domain/TransactionService';
import { GetTransactions } from '../../../../src/transactions/core/useCases/GetTransactions';
import { aTransaction } from '../testing/TransactionBuilder';
import { Clock } from '../../../../src/transactions/core/domain/Clock';
import { StoppedClock } from '../testing/StoppedClock';
import { TransactionType } from '../../../../src/transactions/core/domain/TransactionType';
import { InMemoryTransactions } from '../../../../src/transactions/core/infraestructure/InMemoryTransactions';


describe('GetTransactions should', () => {
    it('retrieve all transactions', async () => {
        clock = StoppedClock.at(new Date(2018, 12, 12, 12, 12));
        const someId = 7;
        const someAmount = 225.32;
        const someType = TransactionType.credit
        const someTransaction = aTransaction()
            .withId(someId).withAmount(someAmount).withDate(clock.now()).withType(someType).build();
        const someTransactionId = await transactions.add(someTransaction)
        const otherId = 128;
        const otherTransaction = aTransaction().withId(otherId).build();
        const otherTransactionId = await transactions.add(otherTransaction)

        const response = await useCase().execute();

        expect(response.length).toEqual(2);
        expect(response[0].id).toEqual(someTransactionId.toInt());
        expect(response[0].type).toEqual(someTransaction.type.toString());
        expect(response[0].amount).toEqual(someTransaction.amount.toInt());
        expect(response[0].date).toEqual(someTransaction.date.getTime());
        expect(response[1].id).toEqual(otherTransactionId.toInt());
    })

    beforeEach(() => {
        transactions = new InMemoryTransactions();
    });

    function useCase() {
        return new GetTransactions(transactions);
    }

    let transactions: TransactionService;
    let clock: Clock;
})
