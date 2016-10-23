import { CompilerTestsBase } from '../core/CompilerTestsBase';

export class CompilerTests extends CompilerTestsBase {
    getWebpackDefinePlugin() {
        return {
            ...super.getWebpackDefinePlugin(),
            'process.env.PROTOCOL' : '"http"',
            'process.env.HOSTNAME' : '"localhost"',
            'process.env.PORT' : '5000',
        }
    }
}
