export interface appData {
    name: string
}

export interface botCredentials {
    appId: string,
    appPassword: string
}

class Config {
    public static getAppData(): appData {
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

    public static getBotCredentials(): botCredentials {
        return {
            appId: process.env.MICROSOFT_APP_ID || '311b7cee-8bf8-4ef6-a188-00828c31f5a8',
            appPassword: process.env.MICROSOFT_APP_PASSWORD || 'TC4983fWtaZ98DfRuibLL71'
        };
    }
};

export default Config;
