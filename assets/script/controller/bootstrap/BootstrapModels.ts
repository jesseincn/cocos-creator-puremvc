import GameProxy from "../../model/GameProxy";
import WebSocketProxy from "../../model/WebSocketProxy";

export default class BootstrapModels extends puremvc.SimpleCommand implements puremvc.ICommand {
    public constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        this.facade.registerProxy(new GameProxy());
        // this.facade.registerProxy(new WebSocketProxy());
    }
}