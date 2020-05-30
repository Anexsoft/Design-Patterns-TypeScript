import { expect } from "chai";
import "mocha";

import FacebookFactory from "./src/factories/facebook/facebook-factory";
import LinkedinFactory from "./src/factories/linkedin/linkedin-factory";
import SlackFactory from "./src/factories/slack/slack-factory";
import FacebookConnector from "./src/factories/facebook/facebook-connector";
import FacebookPublisher from "./src/factories/facebook/facebook-publisher";
import LinkedinConnector from "./src/factories/linkedin/linkedin-connector";
import LinkedinPublisher from "./src/factories/linkedin/linkedin-publisher";
import SlackConnector from "./src/factories/slack/slack-connector";
import SlackPublisher from "./src/factories/slack/slack-publisher";

const facebookFactory = new FacebookFactory(),
    linkedinFactory = new LinkedinFactory(),
    slackFactory = new SlackFactory();

describe("Facebook Publisher", () => {
    it("It must be a Facebook connector", () => {
        expect(true).to.equal(facebookFactory.getConnector() instanceof FacebookConnector);
    });

    it("It must be a Facebook publisher", () => {
        const connector = facebookFactory.getConnector();
        expect(true).to.equal(facebookFactory.getPublisher(connector) instanceof FacebookPublisher);
    });
});

describe("Linkedin Publisher", () => {
    it("It must be a Linkedin connector", () => {
        expect(true).to.equal(linkedinFactory.getConnector() instanceof LinkedinConnector);
    });

    it("It must be a Linkedin publisher", () => {
        const connector = linkedinFactory.getConnector();
        expect(true).to.equal(linkedinFactory.getPublisher(connector) instanceof LinkedinPublisher);
    });
});

describe("Slack Publisher", () => {
    it("It must be a Slack connector", () => {
        expect(true).to.equal(slackFactory.getConnector() instanceof SlackConnector);
    });

    it("It must be a Slack publisher", () => {
        const connector = slackFactory.getConnector();
        expect(true).to.equal(slackFactory.getPublisher(connector) instanceof SlackPublisher);
    });
});