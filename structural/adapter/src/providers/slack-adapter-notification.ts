import INotification from "./notification.interface";
import SlackNotification from "./slack-notification";

class SlackAdapterNotification implements INotification {
    constructor(private slackNotification: SlackNotification) { }

    public post(title: string, message: string): void {
        this.slackNotification.send("general", title, message);
    }
}

export default SlackAdapterNotification;