import IPaymentMethod from "../payment-method.interface";

export default class PayPal implements IPaymentMethod {
    get comission(): number {
        return 0.06;
    }
}