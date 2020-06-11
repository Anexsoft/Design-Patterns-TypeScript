import INotification from "../providers/notification.interface";

class NotificationService {
    constructor(private providers: INotification[]) { }

    public post(title: string, message: string): void {
        this.providers.forEach(p => {
            p.post(title, message);
        });
    }
}

export default NotificationService;