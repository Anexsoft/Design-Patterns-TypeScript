export interface ICommand {
    providerName: string;
    handle(): void;
}