import MyConfiguration from "./my-configuration";

import { expect } from "chai";
import "mocha";

let config = MyConfiguration.getInstance();

describe("My Configuration Class", () => {
    it("object should be not null", () => {
        expect(config !== null).to.equal(true);
    });

    it("objects should be equals", () => {
        let config2 = MyConfiguration.getInstance();

        expect(config === config2).to.equal(true);
    });

    it("enviroment property should be development", () => {
        expect(config.enviroment === "development").to.equal(true);
    });
});