import { TransactionController } from './controllers/TransactionController';
import { SystemRouter } from './router/SystemRouter';

export class HttpProvider {
    static SystemRouter() { return new SystemRouter(D.transactionController()); }
}

class Dependencies {
    static transactionController() { return new TransactionController(); }
}

const D = Dependencies;
