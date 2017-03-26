import {Server} from 'restify';

import Bot from './bot';
import Controller from './controller/restify';

class Routes {
    static get(app: Server): Server {
        app.get('/', Controller.whoami);

        const bot = Bot.init();
        app.post('/hooks/bot', bot);

        return app;
    }
}

export default Routes;
