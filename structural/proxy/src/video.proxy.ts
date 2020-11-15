import { IVideoProvider } from "./video-provider.interface";

class VideoProxy implements IVideoProvider {
    private cache: any = {};

    constructor(private readonly provider: IVideoProvider) { }

    async getPlayList(code: string): Promise<string[]> {
        let result = this.cache[code];

        if (!result) {
            result = await this.provider.getPlayList(code);

            // push to cache
            this.cache[code] = result;
        }

        return result;
    }
}

export {
    VideoProxy
};