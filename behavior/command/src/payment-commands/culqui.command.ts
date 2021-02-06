import { ICommand } from "../command.interface";
import { CreditCardDto } from "./dto/credit-card.dto";

export class CulquiCommand implements ICommand {
    public readonly providerName: string = 'Culqui';

    constructor(private readonly creditCardDef: CreditCardDto) {}

    handle(): void {
        console.log(`${this.providerName} has been triggered ..`);
        // your code goes here ..
    }
}