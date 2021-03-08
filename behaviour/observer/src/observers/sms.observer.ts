import { Order } from "../shopping-cart";
import { Observer } from "../impl/observer.interface";

export class SmsObserver implements Observer {
    update(message: Order): void {
        const total = message.items.map(x => x.quantity * x.unitPrice).reduce((a, b) => a + b);
        console.log(`SMS: ${message.userFirstName}, your order ${message.id} by the amount of $${total} has been approved.`);
    }
}