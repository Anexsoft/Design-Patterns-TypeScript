import { PaymentResponse, PaymentStrategy } from "./interfaces/payment-strategy.interface";

export class Checkout {
    private context?: PaymentStrategy;

    public setStrategy(context: PaymentStrategy) {
        this.context = context;
    }

    public execute(userId: string, amount: number): PaymentResponse {
        if (!this.context) {
            throw new Error('Context must be defined before running.');
        }

        return this.context.execute(userId, amount);
    }
}