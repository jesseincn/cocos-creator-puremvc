import { Test } from "../services/api";

export default class StartViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "StartViewMediator";

    public constructor(viewComponent: any) {
        super(StartViewMediator.NAME, viewComponent);
    }

    public listNotificationInterests(): Array<any> {
        return [];
    }

    public handleNotification(notification: puremvc.INotification): void {
        const data = notification.getBody();
        switch (notification.getName()) {

        }
    }

    public onRegister(): void {
        this.viewComponent.startButton.node.on('click', (event) => {
            cc.log('click.');

            Test({'val': 1}).then((result: any) => {
                cc.log(result.data);
            });
        });
    }

    public onRemove(): void {

    }
}