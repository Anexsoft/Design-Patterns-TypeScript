import { Customer } from "./src/customer";
import { Product } from "./src/product";
import { BasePrice } from "./src/base-price";
import { SpecialPriceDecorator } from "./src/decorators/special-price.decorator";
import { VipCustomerDecorator } from "./src/decorators/vip-customer.decorator";

const customer = new Customer("Eduardo", true, "VIP");
const product = new Product("Guitara Suhr Classic", 2500);

let discount = new BasePrice();

if (customer.isFirstBuy) {
    discount = new SpecialPriceDecorator(discount);
}

if (customer.type === 'VIP') {
    discount = new VipCustomerDecorator(discount);
}

product.setSpecialPrice(
    discount.calculate(product.price));

console.log(product);