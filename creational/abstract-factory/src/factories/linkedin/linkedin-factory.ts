import IAbstractFactory from "../../abstract-factory.interface";
import IConnector from "../connector.interface";
import IPublisher from "../publisher.interface";
import LinkedinPublisher from "./linkedin-publisher";
import LinkedinConnector from "./linkedin-connector";

export default class LinkedinFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new LinkedinConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new LinkedinPublisher(connector);
    }
}