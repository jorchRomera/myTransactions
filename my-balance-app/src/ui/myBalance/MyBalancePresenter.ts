import { GetTransactions } from '../../core/useCases/GetTransactions';
import { Transaction } from '../../core/domain/Transaction';
import { TransactionVM } from './TransactionVM';

export interface MyBalanceView {
    showTransactions(transactions: TransactionVM[]): void;
}

export class MyBalancePresenter {
    private view: MyBalanceView;
    private readonly getTransactions: GetTransactions;
    private transactions: Transaction[] | null = null

    constructor(
        view: MyBalanceView,
        getTransactions: GetTransactions,
    ) {
        this.view = view;
        this.getTransactions = getTransactions;
    }

    async start() {
        await this.initializeMyBalance()
    }

    private async initializeMyBalance() {
        this.transactions = await this.getTransactions.execute();
        this.view.showTransactions(this.transactionsToVM(this.transactions));
    }

    private transactionsToVM(transactions: Transaction[]): TransactionVM[] {
        console.log(transactions);
        return transactions.map(transaction => {
            const { id, type, amount, date } = transaction;
            return { id, type, amount, date: new Date(date).toLocaleString() };
        });
    }
}
