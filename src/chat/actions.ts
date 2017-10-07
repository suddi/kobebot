const talkify: any = require('talkify');

const BotTypes: any = talkify.BotTypes;
const SingleLineMessage: any = BotTypes.SingleLineMessage;
const MultiLineMessage: any = BotTypes.MultiLineMessage;

class Actions {
    public static handleHello(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new SingleLineMessage('Hi! My name is Kobe');
        return next();
    }

    public static handleHowAreYou(_ctx: any, _req: any, res: any, next: any): any {
        res.message = new MultiLineMessage([
            'So good, I just got my favorite treat as a snack',
            'Hmmmm, wanna play fetch?'
        ]);
        return next();
    }
}

export default Actions;
