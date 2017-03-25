'use strict';

const builder = require('botbuilder');

const Config = require('./config');
const Controller = require('./controller');

function getDialogs(bot) {
    bot.dialog('/', Controller.sendWoof);
}

function initBot() {
    const connector = new builder.ChatConnector(Config.getBotCredentials());
    const bot = new builder.UniversalBot(connector);
    getDialogs(bot);
    return connector.listen();
}

function get(app) {
    app.get('/', Controller.whoami.bind(app));

    app.post('/hooks/bot', initBot());

    return app;
}

module.exports = {
    get: get
};
