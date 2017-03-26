import {createServer, Server} from 'restify';

import Chat from './chat';
import Config from './config';
import Routes from './routes';

class App {
    static bootstrap(): Server {
        const app = createServer(Config.getAppData());

        Chat.init();
        Routes.get(app);
        app.listen(Config.getPort(), function () {
            console.log(`${app.name} listening on ${Config.getPort()}`); /* eslint no-console: off */
        });
        return app;
    }
}

if (!module.parent) {
    App.bootstrap();
}
