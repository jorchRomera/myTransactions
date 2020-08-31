import { TransactionsProvider } from '../../transactions/TransactionsProvider';
import { CreateTransactionRequest } from '../../transactions/core/domain/CreateTransactionRequest';

export class TransactionController {
    async getAllTransactions(req: any, res: any) {
        try {
            const transactions = await TransactionsProvider.getTransactions().execute();
            res.status(200).send({ transactions });
        } catch (e) {
            res.status(500).send({ message: e.message });
        }
    }

    async getTransaction(req: any, res: any) {
        try {
            const transaction = await TransactionsProvider.getTransaction().execute(parseInt(req.body.id));
            res.status(200).send(transaction);
        } catch (e) {
            res.status(400).send({ message: e.message });
        }
    }

    async createTransaction(req: any, res: any) {
        try {
            const { type, amount } = req.body;
            const createTransactionRequest: CreateTransactionRequest = { type, amount };
            const transactionId = await TransactionsProvider.createTransaction().execute(createTransactionRequest);
            res.status(200).send({ id: transactionId });
        } catch (e) {
            res.status(400).send({ message: e.message });

        }
    }
}
