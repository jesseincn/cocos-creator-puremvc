import GameProxy from "../../model/GameProxy";
import { GAME_STATUS } from "../../Constants";

export class GameCommand extends puremvc.SimpleCommand implements puremvc.ICommand {

    public constructor() {
        super();
    }

    public static NAME: string = 'GameCommand';

    /**
     * 游戏重置
     */
    public static GAME_RESET: string = 'game_reset';

    /**
     * 执行移动 , body  startLocation: 开始坐标, endLocation: 结束坐标, touchTime: 触摸时长
     */
    public static USER_MOVE: string = 'user_move';

    /**
     * 过关
     * @type {string}
     */
    public static GAME_FINISH: string = 'game_finish';

    /**
     * 注册消息
     */
    public register(): void {
        // this.facade.registerCommand(GameCommand.GAME_RESET, GameCommand); //注册游戏重置消息
        this.facade.registerCommand(GameCommand.USER_MOVE, GameCommand);  //注册移动的消息
        this.facade.registerCommand(GameCommand.GAME_FINISH, GameCommand);  //注册过关的消息
    }

    public execute(notification: puremvc.INotification): void {
        const gameProxy: GameProxy = <GameProxy><any> (this.facade.retrieveProxy(GameProxy.NAME));
        const data: any = notification.getBody();
        switch (notification.getName()) {
            case GameCommand.GAME_RESET:
                gameProxy.reset();
                break;
            case GameCommand.USER_MOVE:

                break;
            case GameCommand.GAME_FINISH:

                break;
        }
    }
}