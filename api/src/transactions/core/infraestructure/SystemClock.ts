import { Clock } from '../domain/Clock';

export class SystemClock implements Clock {
    now(): Date { return new Date(); }
}
