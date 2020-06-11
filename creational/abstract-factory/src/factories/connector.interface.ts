export default interface IConnector {
    open(): void;
    close(): void;
}