import * as bunyan from 'bunyan';
import * as _ from 'lodash';
import {Request, Response} from 'restify';

import Status from './enum/status';
import {statusSet} from './enum/status';

type Logger = bunyan;

interface Message {
    type: string,
    content: string
}

class Controller {
    public static makeBotResponder(logger: Logger, chatter: any): (session: any) => void {
        return function (session: any): void {
            const userId: string = _.get(session, 'message.user.id', '');
            const messageText: string = _.get(session, 'message.text', 'hello');
            return chatter.resolve(userId, messageText, function (err: Error | null, messages: Array<Message>) {
                if (err) {
                    logger.error(err.stack);
                    return session
                        .send("Uhoh, Kobe couldn't understand that...")
                        .send('Please try again')
                        .endDialog();
                }

                messages.map(function (message: Message) {
                    return session.send(message.content);
                });
                return session.endDialog();
            });
        };
    }

    public static makeWhoamiResponder(_logger: Logger): (req: Request, res: Response) => void {
        return function (_req: Request, res: Response): void {
            const statuses: statusSet = Status.get();
            return res.json(200, {
                meta: statuses[200],
                data: {}
            });
        };
    }
}

export default Controller;
