import BootstrapCommands from './bootstrap/BootstrapCommands';
import BootstrapModels from './bootstrap/BootstrapModels';
import BootstrapViews from './bootstrap/BootstrapViews';

export default class StartupCommand extends puremvc.MacroCommand {
    public constructor() {
        super();
    }

    public initializeMacroCommand(): void {
        this.addSubCommand(BootstrapCommands);
        this.addSubCommand(BootstrapModels);
        this.addSubCommand(BootstrapViews);
    }
}