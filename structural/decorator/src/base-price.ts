import { IDiscount } from "./interfaces/discount.interface";

export class BasePrice implements IDiscount {
    calculate(input: number): number {
        console.log(`${this.constructor.name} discount applied.`);
        return input;
    }
}