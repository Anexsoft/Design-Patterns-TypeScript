import { Order } from "../shopping-cart";
import { Observer } from "../impl/observer.interface";

export class EmailObserver implements Observer {
    update(message: Order): void {
        console.log(`EMAIL: Your order #${message.id} has been approved.`);
    }
}