import { PaymentCardStrategy } from "./interfaces/payment-card-strategy.interface";
import { PaymentResponse } from "./interfaces/payment-strategy.interface";

export class MastercardStrategy implements PaymentCardStrategy {
    constructor(public cardNumber: string, public cvv: string) { }

    execute(userId: string, amount: number): PaymentResponse {
        console.log(`Masterdcard approved the transaction for ${userId} in the amount of US$ ${amount}.`);
        return { isSuccess: true };
    }
}