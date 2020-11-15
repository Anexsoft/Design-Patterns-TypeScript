import { VideoProxy } from "./src/video.proxy";
import { YouTubeApi } from "./src/youtube.api";

const proxy = new VideoProxy(new YouTubeApi());

(async () => {
    // first time
    await getPlayList();

    // second time (cache)
    await getPlayList();
})();

async function getPlayList() {
    const startDate = new Date();

    await proxy.getPlayList('courses');

    const endDate = new Date();

    console.log(`Process completed on ${(endDate.getTime() - startDate.getTime()) / 1000} seconds`)
}