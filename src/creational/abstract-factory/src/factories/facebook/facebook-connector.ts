import IConnector from "../connector.interface";

export default class FacebookConnector implements IConnector {
    open(): void {
        // Logic to make a valid connection
    }

    close(): void {
        // Logic to close the current connection
    }
}