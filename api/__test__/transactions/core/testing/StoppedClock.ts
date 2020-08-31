import { Clock } from '../../../../src/transactions/core/domain/Clock';

export class StoppedClock implements Clock {
    private readonly date: Date;

    private constructor(date: Date) {
        this.date = date;
    }

    now(): Date { return this.date; }

    static at(date: Date): StoppedClock {
        return new StoppedClock(date);
    }
}
