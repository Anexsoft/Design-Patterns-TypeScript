import { Observer } from "./observer.interface";

export abstract class Subject {
    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        if (!this.observers.some(x => x === observer)) {
            this.observers.push(observer);
        } else {
            throw new Error('Observer has already been registered.');
        }
    }

    public detach(observer: Observer): void {
        this.observers.filter(x => x !== observer);
    }

    protected notify(message: any): void {
        this.observers.forEach(x => x.update(message));
    }
};