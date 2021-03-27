import "mocha";
import { expect } from "chai";
import { Checkout } from "./src/checkout";
import { PayPalStrategy } from "./src/paypal.strategy";

const checkout = new Checkout();

let userId = "usr-001",
    useEmail = "eduardo@kodoti.com",
    amount = 2000;

describe("Strategy Pattern", () => {
    it("successful paypal usage", () => {
        checkout.setStrategy(
            new PayPalStrategy(useEmail)
        );
        
        const { isSuccess } = checkout.execute(userId, amount);

        expect(isSuccess).to.equal(true);
    });
});