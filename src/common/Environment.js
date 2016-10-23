export class Environment {
    static isProduction() {
        return process.env.NODE_ENV === 'production';
    }
    static isDevelopment() {
        return process.env.NODE_ENV === 'development';
    }
    static isClient() {
        return process.env.TARGET === 'client';
    }
    static isServer() {
        return process.env.TARGET === 'server';
    }
}