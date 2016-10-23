import { CompilerServerBase } from '../core/CompilerServerBase';

export class CompilerServer extends CompilerServerBase {
    getBuildInfoPath() {
        return 'bin/server-stats.json';
    }

    getWebpackDefinePlugin() {
        return {
            ...super.getWebpackDefinePlugin(),
            'process.env.PROTOCOL' : process.env.PROTOCOL || '"http"',
            'process.env.HOSTNAME' : process.env.HOST || '"localhost"',
            'process.env.PORT' : process.env.PORT || '5000',
        }
    }
}
