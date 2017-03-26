interface appData {
    name: string
}

interface botCredentials {
    appId: string,
    appPassword: string
}

class Config {
    static getAppData(): appData {
        return {
            name: 'kobebot'
        };
    }

    static getEnv(): string {
        return process.env.NODE_ENV || 'development';
    }

    static getPort(): number {
        return parseInt(process.env.PORT, 10) || 8000;
    }

    static getTablename(): string {
        return process.env.TABLENAME || '';
    }

    static getBotCredentials(): botCredentials {
        return {
            appId: process.env.MICROSOFT_APP_ID || '',
            appPassword: process.env.MICROSOFT_APP_PASSWORD || ''
        };
    }
};

export default Config;
