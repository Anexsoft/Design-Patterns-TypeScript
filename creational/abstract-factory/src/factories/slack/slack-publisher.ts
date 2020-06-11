import IPublisher from "../publisher.interface";
import IConnector from "../connector.interface";

export default class SlackPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Slack
        console.log("Slack");
        console.log(content);
    }
}