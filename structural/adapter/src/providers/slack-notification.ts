class SlackNotification {
    public send(channelId: string, title: string, message: string): void {
        console.log(`Sending ${title} - ${message} to ${channelId} - Slack`);
    }
}

export default SlackNotification;