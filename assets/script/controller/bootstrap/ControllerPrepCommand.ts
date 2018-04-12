import { GameCommand } from "../commands/GameCommand";

export default class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
    public constructor() {
        super();
    }

    public execute(notification: puremvc.INotification): void {
        (new GameCommand()).register();
    }
}