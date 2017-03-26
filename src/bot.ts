import {ChatConnector, UniversalBot} from 'botbuilder';
import {Request, Response} from 'restify';

import Config from './config';
import Controller from './controller/botbuilder';

class Bot {
    private static getDialogs(bot: UniversalBot): UniversalBot {
        bot.dialog('/', Controller.sendWoof);

        return bot;
    }

    static init(): (req: Request, res: Response) => void {
        const connector: ChatConnector = new ChatConnector(Config.getBotCredentials());
        const bot: UniversalBot = new UniversalBot(connector);
        Bot.getDialogs(bot);
        return connector.listen();
    }
}

export default Bot;
