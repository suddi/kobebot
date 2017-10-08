'use strict';

export interface AppData {
    name: string
}

export interface BotCredentials {
    appId: string,
    appPassword: string
}

class Config {
    public static getAppData(): AppData {
        return {
            name: 'kobebot'
        };
    }

    public static getEnv(): string {
        return process.env.NODE_ENV || 'development';
    }

    public static getPort(): number {
        const port: string = process.env.PORT || '';
        return parseInt(port, 10) || 3000;
    }

    public static getTablename(): string {
        return process.env.TABLENAME || '';
    }

    public static getBotCredentials(): BotCredentials {
        return {
            appId: process.env.MICROSOFT_APP_ID || '',
            appPassword: process.env.MICROSOFT_APP_PASSWORD || ''
        };
    }
}

export default Config;
