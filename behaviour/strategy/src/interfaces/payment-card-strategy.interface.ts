import { PaymentStrategy } from "./payment-strategy.interface";

export interface PaymentCardStrategy extends PaymentStrategy {
    cardNumber: string;
    cvv: string;
}