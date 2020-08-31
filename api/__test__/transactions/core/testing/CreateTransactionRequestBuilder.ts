import { CreateTransactionRequest } from '../../../../src/transactions/core/domain/CreateTransactionRequest';

export class CreateTransactionRequestBuilder {
    private type = 'credit';
    private amount = 350.6;

    withType(type: string): CreateTransactionRequestBuilder {
        this.type = type;
        return this;
    }

    withAmount(amount: number): CreateTransactionRequestBuilder {
        this.amount = amount;
        return this;
    }

    build(): CreateTransactionRequest {
        return {
            type: this.type,
            amount: this.amount,
        };
    }
}

export function aCreateTransactionRequest(): CreateTransactionRequestBuilder {
    return new CreateTransactionRequestBuilder();
}
