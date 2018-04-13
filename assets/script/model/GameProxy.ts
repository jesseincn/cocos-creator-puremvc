import { GAME_STATUS } from "../Constants";
import { Test } from "../services/api";

export default class GameProxy extends puremvc.Proxy implements puremvc.IProxy {
    public static NAME: string = "GameProxy";

    private _status: GAME_STATUS = GAME_STATUS.START;

    public constructor() {
        super(GameProxy.NAME);
    }

    public get status(): GAME_STATUS {
        return this._status;
    }

    public set status(val: GAME_STATUS) {
        this._status = val;
    }

    /**
     * 重置游戏数据
     */
    public reset(): void {

    }

    public fetchTest() {
        Test({'val': 1}).then((result: any) => {
            cc.log(result.data);
        });
    }
}