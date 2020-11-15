import { assert } from "chai";

import { VideoProxy } from "./src/video.proxy";
import { YouTubeApi } from "./src/youtube.api";

const proxy = new VideoProxy(new YouTubeApi());

describe("Video proxy", function () {
    this.timeout(0);

    it("was cached?", async () => {
        const key = 'courses';

        let result = await proxy.getPlayList(key);
        result = await proxy.getPlayList(key);

        assert.isDefined(proxy['cache'][key]);
    });
}); 