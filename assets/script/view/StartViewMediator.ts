import GameProxy from "../model/GameProxy";

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
        this.viewComponent.testButton.node.on('click', (event) => {
            cc.log('click.');

            const gameProxy: GameProxy = <GameProxy>this.facade.retrieveProxy(GameProxy.NAME);
            gameProxy.fetchTest();
        });
    }

    public onRemove(): void {

    }
}