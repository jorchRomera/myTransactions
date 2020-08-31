export class TransactionId {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }

    toInt(): number {
        return this.id;
    }
}
