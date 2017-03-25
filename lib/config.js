'use strict';

function getAppData() {
    return {
        name: 'kobebot'
    };
}

function getEnv() {
    return process.env.NODE_ENV || 'development';
}

function getPort() {
    return process.env.PORT || 8000;
}

function getTablename() {
    return process.env.TABLENAME || '';
}

function getBotCredentials() {
    return {
        appId: process.env.MICROSOFT_APP_ID || '',
        appPassword: process.env.MICROSOFT_APP_PASSWORD || ''
    };
}

module.exports = {
    getAppData: getAppData,
    getEnv: getEnv,
    getPort: getPort,
    getTablename: getTablename,
    getBotCredentials: getBotCredentials
};
