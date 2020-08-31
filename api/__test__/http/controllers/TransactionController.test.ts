import supertest from 'supertest';
const http = require('http');
import app from '../../../src/http/app'
import { aCreateTransactionRequest } from '../../transactions/core/testing/CreateTransactionRequestBuilder';
import { CreateTransactionRequest } from '../../../src/transactions/core/domain/CreateTransactionRequest';

describe('TransactionController should', () => {
    it('return all transactions when receiving a get to the /transactions/getAll end point', async () => {
        const someTransactionRequest = aCreateTransactionRequest().build();
        const newTransactionResponse = await request.post('/transactions/createTransaction').send(someTransactionRequest);
        const someId = newTransactionResponse.body.id;

        const otherTransactionRequest = aCreateTransactionRequest().build();
        const otherTransactionResponse = await request.post('/transactions/createTransaction').send(otherTransactionRequest);
        const otherId = otherTransactionResponse.body.id;

        const getTransactionsResponse = await request.get('/transactions/getAll');

        expect(getTransactionsResponse.statusCode).toBe(200);
        expect(getTransactionsResponse.body.transactions.length).toBe(2);
        expect(getTransactionsResponse.body.transactions[0].id).toBe(someId);
        expect(getTransactionsResponse.body.transactions[1].id).toBe(otherId);
    });

    it('return a transaction when receiving a get to the /transactions/getTransaction end point', async () => {
        const someAmount = 150;
        const someType = 'credit';
        const someTransactionRequest = aCreateTransactionRequest().withAmount(150).withType(someType).build()
        const newTransactionResponse = await request.post('/transactions/createTransaction').send(someTransactionRequest);
        const id = newTransactionResponse.body.id

        const getTransactionResponse = await request.get('/transactions/getTransaction').send({ id });

        expect(getTransactionResponse.statusCode).toBe(200);
        expect(getTransactionResponse.body.id).toBe(id);
        expect(getTransactionResponse.body.amount).toBe(someAmount);
        expect(getTransactionResponse.body.type).toBe(someType);
    });

    it('call create a transaction when receiving a post to the /transactions/createTransaction end point', async () => {
        const someAmount = 150;
        const someType = 'credit';
        const createTransactionRequest: CreateTransactionRequest = { type: someType, amount: someAmount }

        const response = await request.post('/transactions/createTransaction')
            .send(createTransactionRequest);

        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBeGreaterThan(0);
    });

    beforeAll(done => {
        server = http.createServer(app);
        server.listen(done);
        request = supertest(server);
    });

    afterAll(done => server.close(done));

    let server, request;
});
