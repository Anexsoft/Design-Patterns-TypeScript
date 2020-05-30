import PaymentType from "./enums/payment-type";
import IPaymentMethod from "./src/payment-method.interface";
import PaymentMethodFactory from "./src/payment-method-factory";

export default class Order {
    public paymentType?: IPaymentMethod;
    public commission: number = 0;

    constructor(
        private type: PaymentType,
        public amount: number) { }

    public create(): void {
        // set payment type
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

        // calculate commission
        this.commission = this.paymentType.comission * this.amount;

        // ...
    }
}