import {ChatConnector, UniversalBot} from 'botbuilder';
import * as bunyan from 'bunyan';
import {Request, Response} from 'restify';

import Config from './config';
import Controller from './controller';

type Logger = bunyan;

class Bot {
    public static init(logger: Logger, chatter: any): (req: Request, res: Response) => void {
        const connector: ChatConnector = new ChatConnector(Config.getBotCredentials());
        const bot: UniversalBot = new UniversalBot(connector);
        Bot.getDialogs(logger, chatter, bot);
        return connector.listen();
    }

    private static getDialogs(logger: Logger, chatter: any, bot: UniversalBot): UniversalBot {
        bot.dialog('/', Controller.makeBotResponder(logger, chatter));

        return bot;
    }
}

export default Bot;
