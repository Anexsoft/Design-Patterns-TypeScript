import { PaymentCardStrategy } from "./interfaces/payment-card-strategy.interface";
import { PaymentResponse } from "./interfaces/payment-strategy.interface";

export class VisaStrategy implements PaymentCardStrategy {
    constructor(public cardNumber: string, public cvv: string) { }

    execute(userId: string, amount: number): PaymentResponse {
        console.log(`Vista approved the transaction for ${userId} in the amount of US$ ${amount}.`);
        return { isSuccess: true };
    }
}