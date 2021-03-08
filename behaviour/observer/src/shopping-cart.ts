import { Subject } from "./impl/subject.abstract";

let orderNumber = 1;

export class CartItem {
    constructor(
        public id: number,
        public name: string,
        public quantity: number,
        public unitPrice: number
    ) { }
}

export class Order {
    public readonly id: string;

    constructor(
        public readonly userId: number,
        public readonly userFirstName: string,
        public readonly items: CartItem[]) {
        const now = new Date();
        this.id = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${orderNumber.toString().padStart(4, '0')}`;

        orderNumber++;
    }
}

export class ShoppingCart extends Subject {
    constructor(private userId: number, private userFirstName: string) {
        super();
    }

    private readonly items: CartItem[] = [];

    add(item: CartItem) {
        const CartItem = this.items.find(x => x.id === item.id);

        if (CartItem) {
            throw new Error('The product has already been added to the shopping cart.')
        } else {
            this.items.push(item);
        }
    }

    purchase() {
        // your business logic goes here ..

        const order = new Order(this.userId, this.userFirstName, this.items);

        this.notify(order);
    }
}