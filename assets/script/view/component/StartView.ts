const {ccclass, property} = cc._decorator;
import AppFacade from '../../AppFacade';
import StartViewMediator from '../StartViewMediator';

@ccclass
export default class StartView extends cc.Component {
    @property(cc.Button)
    testButton: cc.Button = null;

    // onLoad () {}

    public start () {
        AppFacade.getInstance().registerMediator(new StartViewMediator(this));
    }

    // update (dt) {}

    public onDestroy() {
        AppFacade.getInstance().removeMediator(StartViewMediator.NAME);
    }
}
