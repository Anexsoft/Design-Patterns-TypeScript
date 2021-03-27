import { PaymentStrategy } from "./payment-strategy.interface";

export interface PaymentGatewayStrategy extends PaymentStrategy {
    userEmail: string;
}