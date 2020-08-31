import { Transaction } from '../../../../src/transactions/core/domain/Transaction';
import { TransactionType } from '../../../../src/transactions/core/domain/TransactionType';
import { TransactionId } from '../../../../src/transactions/core/domain/TransactionId';
import { Money } from '../../../../src/transactions/core/domain/Money';

export class TransactionBuilder {
    private static nextId = 1000;
    private id = TransactionBuilder.nextId++;
    private type = TransactionType.credit;
    private amount = 350.6;
    private date = new Date(2020, 4, 12, 9, 32);

    withId(id: number): TransactionBuilder {
        this.id = id;
        return this;
    }

    withType(type: TransactionType): TransactionBuilder {
        this.type = type;
        return this;
    }

    withAmount(amount: number): TransactionBuilder {
        this.amount = amount;
        return this;
    }

    withDate(date: Date): TransactionBuilder {
        this.date = date;
        return this;
    }

    build(): Transaction {
        return {
            id: new TransactionId(this.id),
            type: this.type,
            amount: new Money(this.amount),
            date: this.date,
        };
    }
}

export function aTransaction(): TransactionBuilder {
    return new TransactionBuilder();
}
