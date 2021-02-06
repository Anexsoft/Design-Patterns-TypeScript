import { PaymentMethodHandler } from "./src/payment-method.handler";
import { CulquiCommand } from "./src/payment-commands/culqui.command";
import { CreditCardDto } from "./src/payment-commands/dto/credit-card.dto";
import { PayUCommand } from "./src/payment-commands/payu.command";
import { MercadoPagoCommand } from "./src/payment-commands/mercadopago.command";

const creditCard = new CreditCardDto(
    "visa",
    "Eduardo Rodríguez Patiño",
    "xxx-xxx-xxx-xxx",
    "xxx",
    300.00
);

const paymentMethodHandler = new PaymentMethodHandler();

// example 1
// paymentMethodHandler.process(new CulquiCommand(creditCard));

// example 2
paymentMethodHandler.forceToProcess([
    new CulquiCommand(creditCard),
    new PayUCommand(creditCard),
    new MercadoPagoCommand(creditCard)
]);