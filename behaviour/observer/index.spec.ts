import { ShoppingCart, CartItem } from "./src/shopping-cart";
import { EmailObserver } from "./src/observers/email.observer";
import { SmsObserver } from "./src/observers/sms.observer";

describe("Shopping Cart", () => {
    it("success case", () => {
        const smsObserver = new SmsObserver();
        const emailObserver = new EmailObserver();
        const shoppingCart = new ShoppingCart(1, "Eduardo");
        
        shoppingCart.attach(smsObserver);
        shoppingCart.attach(emailObserver);
        
        shoppingCart.add(new CartItem(1, "Electric Guitar Shur", 1, 2800));
        
        shoppingCart.purchase();
    });
}); 