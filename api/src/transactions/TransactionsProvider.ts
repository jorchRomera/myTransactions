import { GetTransactions } from './core/useCases/GetTransactions';
import { InMemoryTransactions } from './core/infraestructure/InMemoryTransactions';
import { CreateTransaction } from './core/useCases/CreateTransaction';
import { GetTransaction } from './core/useCases/GetTransaction';
import { SystemClock } from './core/infraestructure/SystemClock';


export class TransactionsProvider {
    static getTransactions() { return new GetTransactions(D.transactionService()); }
    static getTransaction() { return new GetTransaction(D.transactionService());}
    static createTransaction() { return new CreateTransaction(D.transactionService(), D.clock());}
}

class Dependencies {
    static transactionService() { return this.singleton('transactionService', () => new InMemoryTransactions()); }
    static clock() { return new SystemClock(); }
    static singleton<T>(name: string, build: () => T): T {
        if (!this._singleInstances[name]) {
            this._singleInstances[name] = build();
        }
        return this._singleInstances[name];
    }
    static _singleInstances = {};
}

const D = Dependencies;
