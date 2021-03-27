export interface PaymentResponse {
    isSuccess: boolean;
    errorMessage?: string;
}

export interface PaymentStrategy {
    execute(userId: string, amount: number): PaymentResponse;
}