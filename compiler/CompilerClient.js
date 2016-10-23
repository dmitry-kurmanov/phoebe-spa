import { CompilerClientBase } from '../core/CompilerClientBase';

export class CompilerClient extends CompilerClientBase {
    getBuildInfoPath() {
        return 'bin/client-stats.json';
    }
}
