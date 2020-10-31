import { assert } from "chai";

import FacebookNotification from "./src/providers/facebook-notification";
import SlackNotification from "./src/providers/slack-notification";

const providers: any[] = [
    new FacebookNotification(),
    new SlackNotification()
];

describe("INotification", () => {
    it("Are providers compatible?", () => {
        providers.forEach(p => {
            assert.typeOf(p.post, 'function');
        });
    });
}); 