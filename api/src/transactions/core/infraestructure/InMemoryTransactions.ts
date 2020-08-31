import { TransactionService } from '../domain/TransactionService';
import { Transaction } from '../domain/Transaction';
import { TransactionId } from '../domain/TransactionId';
import { TransactionType } from '../domain/TransactionType';
import { Money } from '../domain/Money';

export class InMemoryTransactions implements TransactionService {
    private transactions: Transaction[] = [
        // some testing transactions
        {id: new TransactionId(1000), type: TransactionType.credit, amount: new Money(650), date: new Date()},
        {id: new TransactionId(1001), type: TransactionType.credit, amount: new Money(120), date: new Date()},
        {id: new TransactionId(1002), type: TransactionType.credit, amount: new Money(300), date: new Date()},
        {id: new TransactionId(1003), type: TransactionType.debit, amount: new Money(125), date: new Date()},
        {id: new TransactionId(1004), type: TransactionType.debit, amount: new Money(332), date: new Date()},
    ];
    private balance: number = 0;
    private id =+ 1;

    async getAll(): Promise<Transaction[]> {
        return this.transactions;
    }

    async add(transaction: Transaction): Promise<TransactionId> {
        if (this.isADebit(transaction.type) && this.isAmountHigherThanBalance(transaction.amount.toInt()))
            throw Error('Transaction balance cannot be less than zero')
        this.transactions.push(transaction);
        this.updateBalance(transaction);
        return transaction.id;
    }

    async get(transactionId: TransactionId): Promise<Transaction> {
        const transaction = this.transactions.find(transaction => transaction.id.toInt() === transactionId.toInt());
        if (!transaction) throw Error(`Doesn't exists transaction with the ID passed`);
        return transaction;
    }

    nextId(): TransactionId {
        return new TransactionId(this.id++);
    }

    private isADebit = (type: TransactionType) => type === TransactionType.debit;

    private isAmountHigherThanBalance(amount: number) {
        return this.balance - amount < 0;
    }

    private updateBalance(transaction: Transaction) {
        if (this.isADebit(transaction.type)) return this.balance -= transaction.amount.toInt();
        return this.balance += transaction.amount.toInt();
    }
}
