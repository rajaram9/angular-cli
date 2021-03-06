import { BuildOptions } from '../models/build-options';
import { Version } from '../upgrade/version';
import {baseBuildCommandOptions} from './build';

const Command = require('../ember-cli/lib/models/command');

// defaults for BuildOptions
export const baseEjectCommandOptions: any = [
  ...baseBuildCommandOptions,
  { name: 'force', 'type': Boolean }
];

export interface EjectTaskOptions extends BuildOptions {
  force?: boolean;
}


const EjectCommand = Command.extend({
  name: 'eject',
  description: 'Ejects your app and output the proper webpack configuration and scripts.',

  availableOptions: baseEjectCommandOptions,

  run: function (commandOptions: EjectTaskOptions) {
    const project = this.project;
    const EjectTask = require('../tasks/eject').default;
    const ejectTask = new EjectTask({
      cliProject: project,
      ui: this.ui,
    });

    return ejectTask.run(commandOptions);
  }
});


export default EjectCommand;
