'use strict';

const Config = require('./config');
const Routes = require('./routes');

function initLambda() {
    const ApiBuilder = require('claudia-api-builder');

    const app = new ApiBuilder();
    return Routes.get(app);
}

/*
 * To test:
 *      - npm install -g ngrok
 *      - ngrok http 3000
 *      - start up the server with "npm start"
 *      - make a request to fire the webhook
 */
function initServer() {
    const restify = require('restify');

    const app = restify.createServer(Config.getAppData());
    Routes.get(app);
    app.listen(Config.getPort(), function () {
        console.log(`${app.name} listening on ${app.url}`); /* eslint no-console: off */
    });
}

module.exports = Config.getEnv() === 'production' ? initLambda() : initServer();
