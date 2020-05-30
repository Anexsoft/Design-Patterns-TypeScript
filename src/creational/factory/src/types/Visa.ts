import IPaymentMethod from "../payment-method.interface";

export default class Visa implements IPaymentMethod {
    get comission(): number {
        return 0.05;
    }
}