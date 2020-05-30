import IPublisher from "../publisher.interface";
import IConnector from "../connector.interface";

export default class FacebookPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Facebook
        console.log("Facebook");
        console.log(content);
    }
}