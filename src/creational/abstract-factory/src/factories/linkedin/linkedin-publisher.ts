import IPublisher from "../publisher.interface";
import IConnector from "../connector.interface";

export default class LinkedinPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Linkedin
        console.log("Linkedin");
        console.log(content);
    }
}