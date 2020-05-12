export default class MyConfiguration {
    private static instance: MyConfiguration;

    public readonly release: Date;
    public readonly apiUrl: string;
    public readonly environment: string;

    constructor(
        release: Date,
        apiUrl: string,
        environment: string) {
        if (MyConfiguration.instance)
            throw new Error(`Impossible to instance this class once again.`);

        this.release = release;
        this.apiUrl = apiUrl;
        this.environment = environment;

        MyConfiguration.instance = this;
    }

    public static getInstance(): MyConfiguration {
        return this.instance;
    }
}