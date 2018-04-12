import GameProxy from "../../model/proxy/GameProxy";

export default class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    public constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        this.facade.registerProxy(new GameProxy());
        // this.facade.registerProxy(new GridProxy());
    }
}