const {ccclass, property} = cc._decorator;
import AppFacade from '../../AppFacade';
import StartViewMediator from '../StartViewMediator';
import * as i18n from "../../../../packages/i18n/runtime-scripts/LanguageData";

@ccclass
export default class StartView extends cc.Component {
    @property(cc.Button)
    testButton: cc.Button = null;

    // onLoad () {}

    public start () {
        AppFacade.getInstance().registerMediator(new StartViewMediator(this));

        // 脚本使用多语言示例
        i18n.init('zh-cn');
        cc.log(i18n.t("Test Button"));
    }

    // update (dt) {}

    public onDestroy() {
        AppFacade.getInstance().removeMediator(StartViewMediator.NAME);
    }
}
