import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import SlackPublisher from "./slack-publisher";
import SlackConnector from "./slack-connector";

export default class SlackFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new SlackConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new SlackPublisher(connector);
    }
}