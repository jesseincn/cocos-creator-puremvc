import ControllerPrepCommand from './bootstrap/ControllerPrepCommand';
import ModelPrepCommand from './bootstrap/ModelPrepCommand';
import ViewPrepCommand from './bootstrap/ViewPrepCommand';

export default class StartupCommand extends puremvc.MacroCommand {
    public constructor() {
        super();
    }

    public initializeMacroCommand(): void {
        this.addSubCommand(ControllerPrepCommand);
        this.addSubCommand(ModelPrepCommand);
        this.addSubCommand(ViewPrepCommand);
    }
}