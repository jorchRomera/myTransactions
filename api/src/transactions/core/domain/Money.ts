export class Money {
    private readonly amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    toInt(): number {
        return this.amount;
    }
}
