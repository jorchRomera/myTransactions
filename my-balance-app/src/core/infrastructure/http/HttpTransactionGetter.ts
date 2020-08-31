import { Transaction } from '../../domain/Transaction';
import { TransactionsGetter } from '../../domain/TransactionsGetter';
const axios = require('axios').default;

export class HttpTransactionGetter implements TransactionsGetter {
    async get(): Promise<Transaction[]> {
        const response = await axios.get('http://localhost:5686/transactions/getAll');
        if (response.status >= 400) throw new Error('Bad response from server');
        return response.data.transactions;
    }
}
