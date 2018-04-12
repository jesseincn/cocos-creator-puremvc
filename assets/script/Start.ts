const {ccclass, property} = cc._decorator;
import AppFacade from './AppFacade';

@ccclass
export default class Start extends cc.Component {
    public start() {
        AppFacade.getInstance().startup();
    }
}
