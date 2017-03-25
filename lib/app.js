'use strict';

const restify = require('restify');

const Config = require('./config');
const Routes = require('./routes');

function bootstrap() {
    const app = restify.createServer(Config.getAppData());

    Routes.get(app);
    if (Config.getEnv() === 'development') {
        app.listen(Config.getPort(), function () {
            console.log(`${app.name} listening on ${Config.getPort()}`); /* eslint no-console: off */
        });
    }
    return app;
}

if (!module.parent) {
    bootstrap();
}
