'use strict';

import * as bunyan from 'bunyan';
import {createServer, RequestHandlerType, Server} from 'restify';

import Bot from './bot';
import Chat from './chat';
import Config from './config';
import Controller from './controller';

import {AppData} from './config';

type Logger = bunyan;

class App {
    public static bootstrap(): Server {
        const appConfig: AppData = Config.getAppData();
        const env: string = Config.getEnv();
        const app: Server = createServer(appConfig);

        const logger: bunyan = App.initLogger(appConfig.name, env);
        const chatter: any = Chat.init();
        const bot: RequestHandlerType = Bot.init(logger, chatter);
        App.getRoutes(app, logger, bot);

        const port: number = Config.getPort();
        app.listen(port, function () {
            logger.info(`${app.name} listening on ${port}`);
        });
        return app;
    }

    private static initLogger(name: string, env: string): Logger {
        return bunyan.createLogger({env: env, name: name});
    }

    private static getRoutes(app: Server, logger: Logger, bot: RequestHandlerType) {
        app.get('/', Controller.makeWhoamiResponder(logger));

        app.post('/hooks/bot', bot);

        return app;
    }
}

if (!module.parent) {
    App.bootstrap();
}
