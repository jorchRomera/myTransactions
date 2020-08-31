import express, { Router } from 'express';
import { TransactionController } from '../controllers/TransactionController';

export class SystemRouter {
    private router = express.Router();
    private transactionController: TransactionController;

    constructor(transactionController: TransactionController) {
        this.transactionController = transactionController;
    }

    getRouter(): Router {
        this.registerRoutes();
        return this.router;
    }

    registerRoutes() {
        this.router.get('/transactions/getAll', this.transactionController.getAllTransactions);
        this.router.get('/transactions/getTransaction', this.transactionController.getTransaction);
        this.router.post('/transactions/createTransaction', this.transactionController.createTransaction);
    }
}
