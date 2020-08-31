import { GetTransactions } from './useCases/GetTransactions';
import { HttpTransactionGetter } from './infrastructure/http/HttpTransactionGetter';


export class Provider {
    static getTransactions() { return new GetTransactions(D.transactionsGetter()); }
}

class Dependencies {
    static transactionsGetter() { return this.singleton('transactionsGetter', () => new HttpTransactionGetter()); }

    static singleton<T>(name: string, build: () => T): T {
        if (!this._singleInstances[name]) {
            this._singleInstances[name] = build();
        }
        return this._singleInstances[name];
    }

    static _singleInstances: any = {};
}

const D = Dependencies;
