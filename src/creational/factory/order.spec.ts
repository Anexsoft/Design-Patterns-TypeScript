import { expect } from "chai";
import "mocha";

import Order from "./order";
import PaymentType from "./enums/payment-type";

import Visa from "./factory/types/Visa";
import MasterCard from "./factory/types/MasterCard";
import PayPal from "./factory/types/PayPal";

let order1 = new Order(PaymentType.Visa, 100),
    order2 = new Order(PaymentType.Mastercard, 100),
    order3 = new Order(PaymentType.PayPal, 100);

order1.create();
order2.create();
order3.create();

describe("Order - Visa", () => {
    it("Order must be paid by visa", () => {
        expect(true).to.equal(order1.paymentType instanceof Visa);
    });

    it("Order commission must be 5", () => {
        expect(5).to.equal(order1.commission);
    });
});

describe("Order - Mastercard", () => {
    it("Order must be paid by mastercard", () => {
        expect(true).to.equal(order2.paymentType instanceof MasterCard);
    });

    it("Order commission must be 4", () => {
        expect(4).to.equal(order2.commission);
    });
});

describe("Order - PayPal", () => {
    it("Order must be paid by paypal", () => {
        expect(true).to.equal(order3.paymentType instanceof PayPal);
    });

    it("Order commission must be 6", () => {
        expect(6).to.equal(order3.commission);
    });
});