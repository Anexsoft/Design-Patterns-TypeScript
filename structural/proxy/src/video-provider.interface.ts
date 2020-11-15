interface IVideoProvider {
    getPlayList(code: string): Promise<string[]>;
}

export {
    IVideoProvider
};